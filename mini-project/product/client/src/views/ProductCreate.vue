<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">가격</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">제품카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-auto">
                            <select class="form-select" name="" id="">
                                <option value="">전자제품</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" id="">
                                <option value="">컴퓨터</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" name="" id="">
                                <option value="">악세사리</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">태그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
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
                    <button type="button" class="btn btn-lg btn-dark ">취소</button>
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
    }
}
</script>
