<template>
  <div>
    <div>
      <h1>조회화면</h1>
    </div>
    <div>
      <select v-model="selectedCity">
        <option v-bind:value="city.code" :key="i" v-for="(city,i) in cityList">{{ city.name }}</option>
      </select>
      <input type="text" @keyup.enter="searchUser" v-model="userName"/>
      <button type="button" @click="searchUser">조회</button>
      <br><br>
      이름 : <input type="text" v-model="userInfo.userName"><br>
      나이 : <input type="text" v-model.number="userInfo.age"><br>
      직업 : <input type="text" v-model="userInfo.job"><br>
      <button type="button" @click="saveUserInfo">저장</button>
    </div>
    <div>
      <table>
        <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>직업</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="i" v-for="(person , i ) in userList">
          <td>{{ person.userName }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.job }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cityList: [
        {name: '서울', code: '02'},
        {name: '부산', code: '21'},
        {name: '제주', code: '064'},
      ],
      selectedCity: '',
      userList: [],

      //data 관리하기 쉽게 object를 묶어준다
      userInfo: {
        userName: '',
        age: '',
        job: '',
      }

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
  methods: {
    searchUser() {
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userInfo.userName
      }
      this.userList = this.getUserList(params);
    },

    saveUserInfo() {
      if (this.userInfo.userName == '') {
        return alert("이름 입력");
      }
      if (this.userInfo.age == 0 || this.age == '') {
        return alert("나이 입력");
      }

      //userInfo를 쓰면 아래처럼 쓸 필요가 없다
      /* const params = {
         name: this.userInfo.name,
         age: this.userInfo.age,
         job: this.userInfo.job
       }*/

      const result = this.saveData(this.userInfo);

      if (result == 'success') {
        // alert('사용자 생성');
      }
    },

    saveData(params) {
      const result = 'success';
      let user = new Object();
      user = {userName: params.userName, age:params.age, job:params.job};
      this.userList.push(user);
      return result;
    },

    getUserList(params) {
      console.log(params);
      let list = this.userList;

      return list;
    }
  }
}
</script>

<style scoped>

</style>
