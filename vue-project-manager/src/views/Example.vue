<template>
  <div>
    <div>
      {{ valueModel + " " + valueModel2 }}
    </div>
    <input type="text" v-model="valueModel"/>
    <div>
      <input type="number" v-model.number="valueModel2"/>
    </div>
    <div>
      <textarea v-model="valueModel" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div>
      <select v-model="city" name="">
        <option selected value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
      </select>
    </div>

    <div>
      <label for=""><input value="서울" v-model="checked" type="checkbox">서울</label>
      <label for=""><input value="부산" v-model="checked" type="checkbox">부산</label>
      <label for=""><input value="제주" v-model="checked" type="checkbox">제주</label>
      <br>
      <span>체크한 지역 : {{ checked }}</span>
    </div>

    <div>
      <label for=""><input type="radio" v-bind:value="radio[0]" v-model="picked"/>서울</label>
      <label for=""><input type="radio" v-bind:value="radio[1]" v-model="picked"/>부산</label>
      <label for=""><input type="radio" v-bind:value="radio[2]" v-model="picked"/>제주</label>
      <br>
      <span>선택한 지역 : {{ picked }}</span>
    </div>

    <div>
      <img v-bind:src="url" alt=""/>
      <br>
      <input type="text" placeholder="입려해주세요" v-model="textValue"/>
      <button type="button" v-bind:disabled="textValue==''">클릭</button>
    </div>

    <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">
      클래스 바인딩 (배열로도 가능)
    </div>
    <br>
    <div v-bind:style="styleObject">
      인라인 스타일 바인딩 (배열로도 가능)
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      valueModel: '한국',
      valueModel2: 3,
      city: "064",
      checked: [],
      radio: ["서울", "부산", "제주"],
      radio1: "서울2",
      radio2: "부산2",
      radio3: "제주2",
      picked: '',
      url: 'data:image/jpeg;base64,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',
      textValue: '',
      isActive: true,
      isRed: true,
      styleObject: {
        backgroundColor: 'yellow',
        color: 'red',
        fontWeight: 'bold'
      }
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
    //dom 로딩이 다 되는순간
    console.log(this.valueModel2);
  },
  unmounted() {
  },
  methods: {}
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
