<template>
  <div class="join-form">

  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">이름</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="name">
    </div>
  </div>

  <div class="row mb-3">
    <label for="phone" class="col-sm-2 col-form-label">전화번호</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" v-model="this.phone">
    </div>
  </div>

  <div class="row mb-3">
    <label for="id" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="id" class="form-control" id="id"  v-model="this.id">
    </div>
  </div>

  <div class="row mb-3">
    <label for="pwd" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="pwd"  v-model="this.pwd">
    </div>
  </div>


  <div class="row mb-3">
    <label for="nick" class="col-sm-2 col-form-label">닉네임</label>
    <div class="col-sm-10">
      <input type="nick" class="form-control" id="nick"  v-model="this.nick">
    </div>
  </div>

  <button @click="memberJoin">가입하기</button>


  </div>
</template>

<script>
import axios from "axios";

export default ({
  name: "JoinView",
  data() {
    return {
      phoneInfo: "' - '을 제외하고 입력해주세요.",
      name:'',
      phone: '',
      id: '',
      pwd: '',
      nick: ''

    }
  },
  methods: {
    memberJoin() {
      this.name = document.querySelector('#name').value;
      this.phone = document.querySelector('#phone').value;
      this.id = document.querySelector('#id').value;
      this.pwd = document.querySelector('#pwd').value;
      this.nick = document.querySelector('#nick').value;

      const data = {name: this.name, 
                    phone: this.phone,
                    id: this.id,
                    pwd: this.pwd,
                    nick: this.nick}

      axios.post('http://localhost:8083/memberJoin', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        alert('통신 성공!')
      }).catch(error => {
        console.log(error)
        this.$router.push('/main');
      })

      // axios.get('http://localhost:8083/memberJoin/'+this.name).then((res) => {
      //   this.$router.replace('/main');
      // }).catch(error => {
      //   console.log(error);
  
      // })

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
</style>