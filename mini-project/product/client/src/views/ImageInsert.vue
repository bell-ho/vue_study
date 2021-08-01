<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 사진 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품ID</label>
                <div class="col-md-9">
                    {{ productId }}
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품명</label>
                <div class="col-md-9">
                    {{ productDetail.product_name }}
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">썸네일이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png,image/jpeg,image/jpg" multiple>
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>이미지 사이즈 : 350 * 350</li>
                            <li>파일 사이즈 : 1M 이하</li>
                            <li>파일 확장자 : png, jpeg, jpg만 가능</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png,image/jpeg,image/jpg" multiple>
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>최대 5개 가능</li>
                            <li>이미지 사이즈 : 700 * 700</li>
                            <li>파일 사이즈 : 1M 이하</li>
                            <li>파일 확장자 : png, jpeg, jpg만 가능</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품설명이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png,image/jpeg,image/jpg">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>파일 사이즈 : 5M 이하</li>
                            <li>파일 확장자 : png, jpeg, jpg만 가능</li>
                        </ul>
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
            productName: "",
            productDetail: {},
            productImage: [],
        }
    },
    created() {
        //this.$router.push({path: '/detail', query: {product_id: product_id}}); <== 이거로 받은 Id
        this.productId = this.$route.query.product_id;
        this.getProductDetail();
        this.getProductImage();
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
    methods: {
        goToList() {
            this.$router.push({path: '/sales'})
        },
        async getProductDetail() {
            let productDetail = await this.$api("/api/productDetail", {param: [this.productId]});
            if (productDetail.length > 0) {
                this.productDetail = productDetail[0];
            }
        },
        async getProductImage() {
            this.productImage = await this.$api("/api/productMainImages", {param: [this.productId]});
        },
    }
}
</script>
