<template>
  <div>
    <select v-model="city" name="" id="">
      <option :value="city.v" :key="i" v-for="(city,i) in options">{{ city.t }}</option>
    </select>
  </div>

  <div>
    <table>
      <thead>
      <tr>
        <th>제품명</th>
        <th>제품가격</th>
        <th>배송비</th>
        <th>제품카테고리</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product,i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.delivery_price }}</td>
        <td>{{ product.category }}</td>
      </tr>
      </tbody>
    </table>

    <div>
      <h1 v-if="type=='A'">A</h1>
      <h1 v-else-if="type=='B'">B</h1>
      <h1 v-else-if="type=='C'">C</h1>
      <h1 v-else>Other</h1>

      <h1 v-show="bRender">bRender 값이 true면 보임</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      options: [
        {v: '02', t: '서울'},
        {v: '21', t: '부산'},
        {v: '064', t: '제주'},
      ],
      city: '064',
      productList: [
        {
          product_name: '기계식 키보드',
          price: 25000,
          delivery_price: 5000,
          category: '전자제품'
        },
        {
          product_name: '기계식 마우스',
          price: 25000,
          delivery_price: 5000,
          category: '전자제품'
        },
      ],
      bRender:false,
      type:'C'
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
