<template>
  <!-- <el-tabs v-model="mode" id="login-tabs">

    <el-tab-pane
      label="手机登录"
      name="2">
      <el-input
        prefix-icon="el-icon-phone"
        placeholder="请输入手机号"
        v-model="loginInfoV1.phone"
        class="login-input">
      </el-input>
      <verufyInput
        :src="this.global.verifyCodeImg"
        class="login-input"
        prefixIcon="el-icon-warning"
        placeholder="请输入验证码"
        :verify_code="verifyCode"
        @getVerifyCode="getVerifyCode"
        @data-on-change="verifyCodeV1Change($event)">
      </verufyInput>
      <verufyInput
        :imgVerify=false
        class="login-input"
        prefixIcon="el-icon-phone"
        placeholder="请输入短信验证码"
        :verify_code="SMSVerifyCode"
        @getVerifyCode="getSMSVerifyCode"
        @data-on-change="SMSverifyCodeChange($event)">
      </verufyInput>
    </el-tab-pane>

    <el-tab-pane
      label="账户登录"
      name="1">

      <el-input
        prefix-icon="el-icon-user"
        placeholder="邮箱/手机号/会员编号"
        v-model="loginInfoV2.username"
        class="login-input">
      </el-input>
      <el-input
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        v-model="loginInfoV2.password"
        class="login-input">
      </el-input>

      <verufyInput
        :src="this.global.verifyCodeImg"
        class="login-input"
        prefixIcon="el-icon-warning"
        placeholder="请输入验证码"
        :verify_code="verifyCode"
        @getVerifyCode="getVerifyCode"
        @data-on-change="verifyCodeV2Change($event)">
      </verufyInput>
    </el-tab-pane>

    <div class="operate_btn">
      <el-button
        type="primary"
        @click="submit">
        登录
      </el-button>
    </div>

  </el-tabs> -->
  <div class="login-model">
    <p>登录</p>
    <div>
      <el-input
        prefix-icon="el-icon-user"
        placeholder="邮箱/手机号/会员编号"
        v-model="loginInfoV2.username"
        class="login-input">
      </el-input>
      <el-input
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        v-model="loginInfoV2.password"
        class="login-input">
      </el-input>
    </div>
    <div class="operate_btn">
      <el-button
        type="primary"
        @click="submit">
        登录
      </el-button>
    </div>
  </div>
</template>

<script>
import { Tabs, TabPane, Input, Button } from 'element-ui'
import verufyInput from './verify_btn'
import { validValue } from '../func'
import { elmessage } from '../element-wrapper'
export default {
  name: 'login',
  components: {
    'el-tabs': Tabs,
    'el-tab-pane': TabPane,
    'el-input': Input,
    'el-button': Button,
    verufyInput
  },
  data () {
    return {
      mode: '1',
      verifyCode: '',
      SMSVerifyCode: '',

      loginInfoV1: {
        phone: ''
      },
      loginInfoV2: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // getVerifyCode(){

    // },
    // getSMSVerifyCode(){

    // },
    // SMSverifyCodeChange(val){
    //   this.SMSVerifyCode = val;
    // },
    // verifyCodeV1Change(val){
    //   this.verifyCode = val;
    // },
    // verifyCodeV2Change(val){
    //   this.verifyCode = val;
    // },
    // getMode(){
    //   return  {
    //             '2': this.loginInfoV1,
    //             '1': this.loginInfoV2,
    //           }[this.mode]
    // },
    submit () {
      if (validValue(this.loginInfoV2)) {
        this.$emit('submit', this.loginInfoV2)
      } else {
        elmessage('用户名或密码不能为空', 'error')
      }
      // this.$emit('submit', this.mode, this.getMode());
    }
  }
}
</script>

<style>
.el-tabs__header {
  display: flex;
  justify-content: center;
}
.el-tabs__content {
  position: unset;
}
.el-tabs__item {
  font-size: 1.3em;
  font-family: "宋体";
}
.login-input .el-input__inner {
  border: none;
  border-bottom: 1px solid rgb(220, 223, 230);
  transition: border .3s;
  border-radius: 0;
}
.login-input .el-input__inner:focus {
  border-bottom-color: #409EFF;

}

.operate_btn {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  width: 90%;
}
.operate_btn > button {
  width: 40%;
}
.login-model > p {
  font-size: 1.6em;
  margin-bottom: 20px;
  position: relative;
  color: #409EFF;
}
.login-model > p::before {
  position: absolute;
  content: '';
  bottom: -5px;
  width: 15px;
  height: 2px;
  border-radius: 30%;
  background-color: #409EFF;
}
</style>
