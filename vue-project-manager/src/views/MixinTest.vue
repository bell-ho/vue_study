<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
  </div>
  <table>
    <thead>
    <tr>
      <td>제품명</td>
      <td>가격</td>
      <td>배송료</td>
      <td>카테고리</td>
    </tr>
    </thead>
    <tbody>
    <tr :key="i" v-for="(product , i) in productList">
      <td>{{ product.product_name }}</td>
      <td>{{ product.delivery_price }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.category }}</td>
    </tr>
    </tbody>
  </table>

  <div>
    <PageTitle v-bind:title="title"/>

    <!--send-message 이 이름으로 받음-->
    <ChildComponent @send-message="sendMessage" ref="child" :author="author" :likes="likes" :isOk="isOk"
                    :commentIds="commentIds"/>
  </div>

  <div>
    <h1>
      {{ parentMsg }}
    </h1>
  </div>
  <div>
    <button type="button" @click="callChildFunction">부모의 클릭</button>
  </div>

  <button type="button" @click="showData">부모 버튼</button>
</template>
<script>
import ApiMixin from '../api.js';
import PageTitle from '../components/PageTitle';
import ChildComponent from "./ChildComponent";

export default {
  name: '',
  mixins: [ApiMixin],
  components: {
    PageTitle,
    ChildComponent
  },
  data() {
    return {
      productList: [],
      title: "전송할데이터",
      likes: 23,
      isOk: false,
      commentIds: "[1,5,3]",
      author: {name: '홍길', company: '네이버'},
      parentMsg: ''
    };
  },
  computed: {
    message2() {
      return this.$refs.child.message2;
    }
  },
  setup() {
  },
  created() {
  },
  mounted() {
    console.log('컴포넌트 마운티드');
  },
  unmounted() {
  },
  methods: {
    async getProductList() {
      this.productList =
        await this.$callApi(
          'https://8daa045a-f995-4be6-9aa3-f5c2ecb1bf5b.mock.pstmn.io/list',
          'get',
          {}
        );
    },
    callChildFunction() {
      //this.$refs.child 여기까지 child 컴포넌트로 들어오고 거기에서 ref가 child_btn인 버튼을 클릭
      // this.$refs.child.$refs.child_btn.click();

      //this.$refs.child 여기까지 child 컴포넌트로 들어오고 바로 childFunction()메소드 실행
      // this.$refs.child.childFunction();

      this.$refs.child.msg = '부모가 변경한 메세지';
    },
    sendMessage(data) { //$emit으로 파라미터로 가져옴
      // alert(data);
      this.parentMsg = data;
    },
    showData() {
      alert(this.message2);
    }
  }
}
</script>

<style scoped>

</style>
