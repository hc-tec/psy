<template>
  <div id="login-page">
    <el-image :src="logo" class="logo">
    </el-image>
    <el-button
      type="success"
      class="regis"
      @click="regis">
      立即注册
    </el-button>
    <login
      id="login"
      @submit="login($event)">
    </login>
  </div>
</template>

<script>
import { Button, Image } from 'element-ui'
import login from '@/components/login'
export default {
  name: 'login-regis',
  components: {
    login,
    "el-image": Image,
    "el-button": Button,
  },
  data(){
    return {
      logo: this.global.logo,
    }
  },
  methods: {
    regis(){
      this.$router.push('/register');
    },
    login(loginIngo){
      // console.log(loginIngo);
      this.$router.push('/memberService/home');
    }
  }
}
</script>

<style>
#login-page {
  background: url('/img/浑天刷.jpg') no-repeat;
  background-size: cover;
  width: 1100px;
  margin: 0 auto;
  margin-top: 130px;
  padding: 30px;
  position: relative;
}
#login {
  width: 360px;
  height: 270px;
  padding: 10px 20px;
  background-color: #fff;
  margin-left: 600px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.17);
  position: relative;
}
.regis {
  position: absolute;
  left: 200px;
  top: 50%;
  transform: translateY(-50%);
}
.logo {
  position: absolute;
  top: -100px;
}
</style>
