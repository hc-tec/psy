<template>
  <div id="login-page">
    <el-button type="warning" style="position:absolute;right:10px;top:-50px" @click="search">会员查询</el-button>
    <el-image :src="logo" class="logo">
    </el-image>
    <div class="regis">
      <p>想获得更多心理学相关资讯</p>
      <p>注册成为<span>江西省心理咨询师协会会员</span></p>
      <el-button
        type="success"
        @click="regis">
        立即注册
      </el-button>
    </div>
    <login
      id="login"
      @submit="initLogin">
    </login>
  </div>
</template>

<script>
import login from '@/components/login'
import { Button, Image } from 'element-ui'
import { ajaxPost, elmessage, axios } from '../element-wrapper'
import { SIGN_IN } from '../api'
import { setCookie, getCookie, delCookie } from '../func'
export default {
  name: 'login-regis',
  components: {
    login,
    'el-image': Image,
    'el-button': Button
  },
  data () {
    return {
      logo: this.global.logo
    }
  },
  methods: {
    regis () {
      this.$router.push('/register')
    },
    search()  {
      this.$router.push('/search')
    },
    initLogin (loginInfo) {
      ajaxPost(
        SIGN_IN, loginInfo,
        this.succLogin, this.failLogin
      )
    },


    succLogin (res) {
      console.log(res)
      if (parseInt(res.data.code) === 200) {
        // 保存 token 到 cookie 中，时长为半小时
        setCookie('token', res.data.data.token, 1000 * 60 * 30)
        // 保存用户信息到全局
        this.global.memberInfo = res.data.data
        // 转到控制台
        this.$router.push('/memberService/home')

        axios.defaults.headers['Authorization'] = `JWT ${getCookie('token')}`;
      } else {
        elmessage('用户名或密码错误', 'error')
      }
    },
    failLogin (e) {
      elmessage('用户名或密码输入错误', 'error')
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
  height: 200px;
  padding: 10px 20px;
  background-color: #fff;
  margin-left: 600px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.17);
  position: relative;
}
.regis {
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
}
.regis > * {
  margin-bottom: 10px;
}
.regis > p {
  color: white;
}
.regis > p:nth-child(1) {
  font-size: 1.1em;
}
.regis > p:nth-child(2) {
  font-size: 1.5em;
  font-weight: bold;
}
.regis > p:nth-child(2) > span {
  color: rgb(237,222,21);
}
.regis > button {
  box-shadow: 2px 5px 5px rgba(120,120,120,.6);
}
.logo {
  position: absolute;
  top: -100px;
}
</style>
