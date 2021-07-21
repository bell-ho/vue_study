<template>
  <div v-html="htmlString">
  </div>
</template>
<script>
export default {
  name: 'DataBindingHtml',
  components: {},
  data() {
    return {
      htmlString: '<p style="color: red;">html을 바인딩 하고싶을때는 v-html을 사용</p>',
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
