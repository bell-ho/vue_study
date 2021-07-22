<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The count is : {{ counter }}</p>
    <button type="button" @click="one(),two()">메소드 동시 두개</button>
    <br><br>
    <select v-model="city" @change="changeSelect" name="" id="">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <br>
    <br>
    <input type="text" v-model="textValue" @keyup.enter="showValue"/>

    <div>
      <h3>{{ firstName }}{{ lastName }}</h3>
      <h3>{{ getFullName() }} 메소드로 구현 : 매번 구현을 하게됨</h3>
      <h3>{{ fullName }} computed : 메소드와의 차이 computed는 연산을 한번만함</h3>
    </div>

    <div>
      <input type="text" v-model="lastName">
      <input type="text" v-model="firstName">
    </div>
    <br>
    <br>
    <div>
      <input type="number" v-model.number="x1">
      <input type="number" v-model.number="x2">
      <input type="number" v-model.number="y">
      <button type="button" @click="plusNum">계산</button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      counter: 0,
      city: '',
      textValue: '',
      firstName: '종호',
      lastName: '이',
      x1: '',
      x2: '',
      y: ''
    };
  },
  computed: {
    fullName() { //데이터 필드를 감시
      return this.firstName + this.lastName;
    }
  },
  watch: {
    x1() {  //data의 변경사항을 바로 갱신함 하지만 많은 자원을 사용함
      this.y = this.x1 + this.x2;
    },
    x2() {
      this.y = this.x1 + this.x2;
    },
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    one() {
      alert("1");
    },
    two() {
      alert("2");
    },
    changeSelect() {
      alert(this.city);
    },
    showValue() {
      alert(this.textValue);
    },
    getFullName() {
      return this.firstName + this.lastName;
    },
    plusNum() {
      this.y = this.x1 + this.x2;
    }
  }
}
</script>

<style scoped>

</style>
