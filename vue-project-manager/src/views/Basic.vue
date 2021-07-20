<template>
  <h1>Hello</h1>
  <div>
    <h1>{{ title }}</h1>
    <!--v-model 양방향 데이터-->
    <input type="text" v-model="title"/>
  </div>
</template>
<script>
export default {
  name: 'basic',
  components: {},
  data() {
    return {
      title: ''
    };
  },
  setup() {},
  created() {}, //컴포넌트가 실행이 되는순간
  mounted() {}, //dom이 로딩이 다 되는순간
  unmounted() {}, //컴포넌트에서 다른 컴포넌트로 이동하는 순간
  methods: {}
}
</script>
<style scoped>

</style>
