<template>
  <div class="join-form">

  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">이름</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="name">
    </div>
  </div>
  <div>
  <p v-if="this.nameInfo==1">이름은 2-10글자 이내로 작성해주세요.</p>
  </div>

  <div class="row mb-3">
    <label for="phone" class="col-sm-2 col-form-label">전화번호</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" v-model="this.phoneInfo">
    </div>
  </div>

  <div class="row mb-3">
    <label for="id" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="id" class="form-control" id="id">
    </div>
  </div>
  <div>
    <p v-if="this.idInfo==1">2글자에서 10글자 이내로 입력해주세요.</p>
  </div>

  <div class="row mb-3">
    <label for="pwd" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="pwd" class="form-control" id="pwd">
    </div>
  </div>
  <div>
    <p v-if="this.pwdInfo==1">8글자에서 15글자 이내의 영문, 숫자로 입력해주세요.</p>
  </div>


  <div class="row mb-3">
    <label for="nick" class="col-sm-2 col-form-label">닉네임</label>
    <div class="col-sm-10">
      <input type="nick" class="form-control" id="nick">
    </div>
  </div>
  <div>
    <p v-if="this.nickInfo==1">1글자에서 10글자 이내, 특수 문자를 제외하고 입력해주세요.</p>
  </div>

  <div>
    <p v-if="this.check==1">작성을 완료해주세요.</p>
  </div>
  <div>
    <button @click="validateInfo" id="clickJoin">가입하기</button>
  </div>

  </div>
</template>

<script>
import axios from "axios"

export default ({
  name: "JoinView",
  data() {
    return {
      phoneInfo: "' - '을 제외하고 입력해주세요.",
      nameInfo: 0,
      pwdInfo: 0,
      idInfo: 0,
      nickInfo: 0,
      name:'',
      phone: '',
      id: '',
      pwd: '',
      nick: '',
      check: 0,

    }
  },
  methods: {
    async validateInfo() {

      this.name = document.querySelector('#name').value;
      this.phone = document.querySelector('#phone').value;
      this.id = document.querySelector('#id').value;
      this.pwd = document.querySelector('#pwd').value;
      this.nick = document.querySelector('#nick').value;

      if(this.name.length <=1 || this.name.length >= 11 ) { this.nameInfo = 1 }
      if(this.id.length <=1 || this.id.length >= 11) {this.idInfo = 1}
      if(this.pwd.length <=7 || this.pwd.length >=16) {this.pwdInfo = 1}
      if(this.nick.length ==0 || this.nick.length >= 10) {this.nickInfo = 1}

      await this.memberJoin();

    },
    async memberJoin() {

      if(!this.name || !this.phone || !this.id || !this.pwd || !this.nick) {
        this.check = 1;
        stop;
      } else {
      const data = {user_name: this.name, 
                    user_phone: this.phone,
                    user_id: this.id,
                    user_pwd: this.pwd,
                    user_nick: this.nick}

        axios.post('http://localhost:8090/memberJoin', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.$store.commit('user_num', res.data)
          this.$router.push('/');
        }).catch(error => {
          console.log(error)
        })
      }
    },
    }

})


</script>

<style>
  .join-form {
    position: relative;
    margin-left: 40%;
    margin-top: 10%;
  }
  .row {
    padding-top: 3%;
  }
  .form-control{
    height: 35px;
    width: 250px;
    
  }
  #phone {
    font-size: 17px;
    color: gray;
  }
  #clickJoin {
    margin-top: 5%;
    height: 30px;
  }
</style>