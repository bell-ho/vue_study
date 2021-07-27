import axios from "axios";

export default {
  mounted() {
    console.log('믹스인 마운티드');
  },
  methods: {
    async $callApi(url, method, data) {//async : 비동기
      return (
        await axios({ //await : 결과가 오기까지 대기
          method: method,
          url: url,
          data: data
        }).catch(e => {
          console.log(e);
        })
      ).data; //서버에서 response해준 data
    }
  }
}
