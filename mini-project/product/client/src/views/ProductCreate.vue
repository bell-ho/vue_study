<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="product.product_name">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">가격</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.product_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.add_delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-auto">
                            <select class="form-select" name="" v-model="cate1" @change="changeCategory1">
                                <option :value="cate" v-for="(cate,i) in category1" :key="i">{{ cate }}</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" v-model="cate2" @change="changeCategory2">
                                <option :value="cate" v-for="(cate,i) in category2" :key="i">{{ cate }}</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" v-model="cate3">
                                <option value="" v-for="(cate,i) in category3" :key="i">{{ cate }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">태그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="product.tags">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.outbound_days">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-dark">취소</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-danger" @click="productInsert">등록</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            product: {
                product_name: "",
                product_price: 0,
                delivery_price: 0,
                add_delivery_price: 0,
                tags: "",
                outbound_days: 0,
                seller_id: 1,
                category_id: 1
            },
            categoryList: [],
            category1: [],
            category2: [],
            category3: [],
            cate1: "",
            cate2: "",
            cate3: "",
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    mounted() {
        if (this.user.email == undefined) {
            alert("로그인이 필요합니다");
            // history.back(); //이전페이지로
            this.$router.push("/"); //제품리스트 페이지로
        }
    },
    created() {
        this.getCategoryList();
    },
    methods: {
        goToList() {
            this.$router.push({path: '/sales'})
        },
        async getCategoryList() {
            let categoryList = await this.$api("/api/categoryList", {});
            this.categoryList = categoryList;

            let oCategory = {};
            categoryList.forEach(item => {
                oCategory[item.category1] = item.id;
            });

            let category1 = [];
            for (let key in oCategory) {
                category1.push(key);
            }
            this.category1 = category1;

            //전체 카테고리리스트에서 카테고리1이 첫번째 인덱스인것 (카테고리1 에는 전자제품 , 생필품이 있다)
            let category2 = [];
            category2 = categoryList.filter(item => {
                return item.category1 == category1[0];
            });

            let oCategory2 = {};
            category2.forEach(item => {
                oCategory2[item.category2] = item.id;
            });

            category2 = [];
            for (let key in oCategory2) {
                category2.push(key);
            }
            this.category2 = category2;
        },
        changeCategory1() {
            this.category3 = [];
            let categoryList = this.categoryList.filter(item => {
                return item.category1 == this.cate1;
            });

            let oCategory2 = {};
            categoryList.forEach(item => {
                oCategory2[item.category2] = item.id;
            });

            let category2 = [];
            for (let key in oCategory2) {
                category2.push(key);
            }
            this.category2 = category2;
        },
        changeCategory2() {
            let categoryList = this.categoryList.filter(c => {
                return (c.category1 == this.cate1 && c.category2 == this.cate2);
            });
            let oCategory3 = {};
            categoryList.forEach(item => {
                oCategory3[item.category3] = item.id;
            });
            let category3 = [];
            for (let key in oCategory3) {
                category3.push(key);
            }
            this.category3 = category3;
        },
        productInsert() {
            if (this.product.product_name == "") return this.$swal("제품명을 입력해주세요");
            if (this.product.product_price == "" || this.product.product_price == 0) return this.$swal("제품가격을 입력해주세요");
            if (this.product.delivery_price == "" || this.product.delivery_price == 0) return this.$swal("배송료를 입력해주세요");
            if (this.product.outbound_days == "" || this.product.outbound_days == 0) return this.$swal("출고일을 입력해주세요");

            this.product.category_id = this.categoryList.filter(c => {
                return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3);
            })[0].id;

            console.log(this.product.category_id);

            this.$swal.fire({
                title: '등록 하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: `등록`,
                cancelButtonText: `취소`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.$api("/api/productInsert", {param: [this.product]});
                    this.$swal.fire('완료', '', 'success');
                    this.$router.push({path: '/sales'});
                }
            });
        }
    },
}
</script>
