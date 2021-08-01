<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 수정</h2>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="productDetail.product_name">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">가격</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="productDetail.product_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="productDetail.delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="productDetail.add_delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-auto">
                            <select class="form-select" name="" >
                                <option value="">전자제품</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" >
                                <option value="">컴퓨터</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" >
                                <option value="">악세사리</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">태그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="productDetail.tags">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="productDetail.outbound_days">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-dark" @click="goToList">취소</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-danger ">등록</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            productId: 0,
            productDetail: {},
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
        //this.$router.push({path: '/detail', query: {product_id: product_id}}); <== 이거로 받은 Id
        this.productId = this.$route.query.product_id;
        this.getProductDetail();
        // this.getProductImage();
    },
    methods:{
        async getProductDetail() {
            let productDetail = await this.$api("/api/productDetail", {param: [this.productId]});
            if (productDetail.length > 0) {
                this.productDetail = productDetail[0];
            }
            console.log(this.productDetail);
        },
        goToList() {
            this.$router.push({path: '/sales'})
        },
    }
}
</script>
