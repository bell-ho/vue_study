<template>
  <div>
    likes : {{ likes }}
  </div>
  <div>
    isOk : {{ isOk }}
  </div>
  <div>
    commentIds : {{ commentIds }}
  </div>
  <div>
    author name:{{ author.name }} <br>
    author company:{{ author.company }}
  </div>
  <div>
    <button ref="child_btn" type="button" @click="childFunction">자식의 클릭</button>
  </div>
  <div>{{ msg }}</div>

  <div>{{ message }}</div>
  <div>
    <button type="button" @click="sendFromChild">자식 컴포넌트 클릭</button>
  </div>

  <div>
    <button type="button" @click="changeData">자식 컴포넌트 데이터변경</button>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    likes: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    commentIds: {
      type: Array
    },
    author: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      sampleData: '',
      msg: '자식에 있던 메세지',
      message: '자식컴포넌트에서 가지고 있던 메세지',
      message2: '자식컴포넌트에서 가지고 있던 메세지'
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
    console.log(this.commentIds)
  },
  unmounted() {
  },
  methods: {
    childFunction() {
      alert("부모가 발생시킨 이벤트");
    },
    sendFromChild() {
      //send-message 이 이름으로 보냄
      this.$emit('send-message', this.message);
    },
    changeData() {
      this.message2 = '자식에서 데이터변경이 일어남';
    }
  }
}
</script>

<style scoped>

</style>
