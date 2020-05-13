<template>
  <el-tabs v-model="mode" id="login-tabs">
    <!-- <el-tab-pane

      v-for="(tab,index) in tabs"
      :key="tab.label"
      :label="tab.label"
      >
      <el-input
        v-for="inputArea in tab.content"
        :key="inputArea.placeholder"
        :prefix-icon="inputArea.icon"
        :placeholder="inputArea.placeholder"
        v-model="inputArea.input"
        class="login-input">
      </el-input>

      <div class="operate_btn">
        <el-button
          type="primary"
          @click="submit(index)">登录</el-button>

        <el-button
          type="warning">找回密码</el-button>
      </div>

    </el-tab-pane> -->

    <el-tab-pane
      label="手机登录"
      name="1">
      <el-input
        prefix-icon="el-icon-phone"
        placeholder="请输入手机号"
        v-model="loginInfoV1.phoneNum"
        class="login-input">
      </el-input>
      <verufyInput
        :src="this.global.verifyCodeImg"
        class="login-input"
        prefixIcon="el-icon-warning"
        placeholder="请输入验证码"
        :verify_code="loginInfoV1.verifyCode"
        @getVerifyCode="getVerifyCode"
        @data-on-change="verifyCodeV1Change($event)">
      </verufyInput>
      <verufyInput
        :imgVerify=false
        class="login-input"
        prefixIcon="el-icon-phone"
        placeholder="请输入短信验证码"
        :verify_code="loginInfoV1.SMSVerifyCode"
        @getVerifyCode="getSMSVerifyCode"
        @data-on-change="SMSverifyCodeChange($event)">
      </verufyInput>
    </el-tab-pane>

    <el-tab-pane
      label="账户登录"
      name="2">
      <el-input
        prefix-icon="el-icon-user"
        placeholder="邮箱/手机号/会员编号"
        v-model="loginInfoV2.phone_email_vip_Num"
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
        :verify_code="loginInfoV2.verifyCode"
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

      <el-button
        type="warning">
        找回密码
      </el-button>
    </div>

  </el-tabs>
</template>

<script>
import { Tabs, TabPane, Input, Button } from 'element-ui'
import verufyInput from './verify_btn'
export default {
  name: 'login',
  components: {
    "el-tabs": Tabs,
    "el-tab-pane": TabPane,
    "el-input": Input,
    "el-button": Button,
    verufyInput
  },
  data(){
    return {
      mode: '1',
      loginInfoV1: {
        phoneNum: '',
        verifyCode: '',
        SMSVerifyCode: '',
      },
      loginInfoV2: {
        phone_email_vip_Num: '',
        password: '',
        verifyCode: '',
      }
    }
  },
  methods: {
    getVerifyCode(){

    },
    getSMSVerifyCode(){

    },
    SMSverifyCodeChange(val){
      this.loginInfoV1.SMSVerifyCode = val;
    },
    verifyCodeV1Change(val){
      this.loginInfoV1.verifyCode = val;
    },
    verifyCodeV2Change(val){
      this.loginInfoV2.verifyCode = val;
    },
    getMode(){
      return  {
                '1': this.loginInfoV1,
                '2': this.loginInfoV2,
              }[this.mode]
    },
    submit(){
      this.$emit('submit', this.getMode());
    },
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
  margin: 20px 0;
  width: 90%;
}
.operate_btn > button {
  width: 40%;
}
</style>
