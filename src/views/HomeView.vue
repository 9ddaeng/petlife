<template>

  <div class="inline">
  <firstmeet class="cat"></firstmeet>
  <div>
    <div class="border">
      <input type="text" class="userInput" id="id" v-bind:value="this.IDinformation" @click="cleanId">
    </div>
    <div class="border">
      <input type="text" class="userInput" id="pwd" v-bind:value="this.PWDinformation" @keydown.enter="sendUserInfo" @click="cleanPwd">
    </div>
    <div class="border">
      <button type="button" id="login" @click="sendUserInfo">로그인하기</button>
    </div>
    <div class="find">
      <p @click="findId">아이디 찾기</p>
    </div>
    <div class="find">
      <p>|</p>
    </div>
    <div class="find">
      <p @click="findPwd">비밀번호 찾기</p>
    </div>
  </div>
  
  <div>
    <div class="join">
    <span>계정이 없으신가요?&nbsp;&nbsp;</span>
    <button type="button" @click="$router.push('/join')">가입하기</button>
  </div>

  

  </div>
</div>

</template>

<style>
  .inline {
    margin-top: 200px;
    column-count:3;
    position:relative;
    margin-left: 450px;
  }
  .border {
    border-color: gray;
    padding: 3%;
  }
  .userInput {
    width: 230px;
    height: 30px;
  }
  .inputBox {
    border-color: gray;
    font-size: 14px;
  }
  #login {
    width: 238px;
    height: 35px;
  }
  .find {
    /*column-count: 3;
    column-rule-style: solid;
    column-rule-width: thin;
    column-rule-color: lightslategray; */
    float: left;
    margin-right: 30px;
    margin-left: 10px;
  }

  .join {
    margin-top: 70px;
    margin-left: 40px;
  }

</style>

<script>
import firstmeet from "@/components/firstmeet.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    firstmeet,
  },
  data() {
    return {
      IDinformation: "아이디",
      PWDinformation: "비밀번호",
      id: '',
      pwd: '',
      user_id: '',
      user_pwd: '',
    };
  },
  methods: {
    sendUserInfo() {
      this.user_id = document.querySelector('#id').value;
      this.user_pwd = document.querySelector('#pwd').value;

      const data = {
        user_id: this.user_id,
        user_pwd: this.user_pwd
      }

      axios.post('http://localhost:8090/login', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.data !== null) {
            this.$store.commit('user_num', res.data)
            this.$router.push('/main');
          } else {
            alert('일치하는 회원 정보가 없습니다.');
            stop;
          }

        }).catch(error => {
          console.log(error)
        })
    },
    cleanId() {
      this.IDinformation = "";
    },
    cleanPwd() {
      this.PWDinformation = "";
    }

  }
};
</script>
