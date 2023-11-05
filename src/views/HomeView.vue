<template>

<div class="inline">
  <firstmeet class="cat"></firstmeet>
  <div>
    <div class="border">
      <input type="text" class="userInput" id="id" v-bind:value="this.IDinformation" @keydown="userID">
    </div>
    <div class="border">
      <input type="text" class="userInput" id="pwd" v-bind:value="this.PWDinformation" @keydown="userPWD" @keydown.enter="sendUserInfo">
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

export default {
  name: "HomeView",
  components: {
    firstmeet,
  },
  data() {
    return {
      IDinformation: "이메일 혹은 아이디",
      PWDinformation: "비밀번호",
      id: '',
      pwd: ''
    };
  },
  methods: {
    userID() {
      this.id = document.querySelector('#id');
      this.IDinformation = "";
    },
    userPWD() {
      this.pwd = document.querySelector('#pwd');
      this.PWDinformation = "";
    },
    sendUserInfo() {
      console.log("this.id="+this.id);
      console.log("this.pwd="+this.pwd);
    },

  }
};
</script>
