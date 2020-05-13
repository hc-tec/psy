<template>
  <div>
    <div id="regis_info">
      <div>
        <h1>会员注册</h1>

        <el-form
          class="regis_form"
          :rules="regis_rules"
          :model="register_info"
          label-width="100px">

          <el-form-item label="真实姓名:" prop="real_name">
            <el-input
              placeholder="请输入您的姓名"
              v-model="register_info.real_name">
            </el-input>
          </el-form-item>

          <el-form-item label="设置密码:" prop="set_pawd">
            <el-input
              placeholder="6-16的数字和字母组合"
              v-model="register_info.set_pawd"
              maxlength="16"
              show-word-limit>
            </el-input>
          </el-form-item>

          <el-form-item label="确认密码:" prop="sure_pawd">
            <el-input
              placeholder="请再次输入密码"
              v-model="register_info.sure_pawd"
              maxlength="16"
              show-word-limit>
            </el-input>
          </el-form-item>

          <el-form-item label="手机号:" v-if="phone_verify_on" prop="phone_num">
            <el-input
              placeholder="请输入手机号"
              v-model="register_info.phone_num">
            </el-input>
          </el-form-item>

          <el-form-item label="验证码:" prop="verify_code">
            <verifyBtn
              :src="verify_code_image"
              :verify_code="register_info.verify_code"
              @data-on-change="numberVerifyChange($event)"
              @getVerifyCode="getVerifyCode($event)">
            </verifyBtn>
          </el-form-item>

          <el-form-item label="短信验证码:" v-if="phone_verify_on" prop="SMS_verify_code">
            <verifyBtn
              :verify_code="register_info.SMS_verify_code"
              :imgVerify=false
              @getVerifyCode="getVerifyCode($event)"
              @data-on-change="smsVerifyChange($event)">
            </verifyBtn>
          </el-form-item>


        </el-form>

        <el-radio
          label="1"
          v-model="hasReadDoc" >
          我已阅读中国心理学会会员条例，并遵守相关规定。
        </el-radio>
        <br />
        <el-button
          class="regis_btn"
          type="primary"
          :disabled="!hasReadDoc"
          @click="submitForm('ruleForm')">
          注册
        </el-button>

      </div>

    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Radio, Image } from 'element-ui'
import verifyBtn from './verify_btn'
export default {
  name: 'register',
  components: {
    "el-input": Input,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
    "el-radio": Radio,
    "el-image": Image,
    verifyBtn
  },
  data(){
    return {
      phone_verify_on: true,
      hasReadDoc: false,
      verify_code_image: '/img/浑天刷.jpg',
      register_info: {
        real_name: '',
        set_pawd: '',
        sure_pawd: '',
        phone_num: '',
        verify_code: '',
        SMS_verify_code: '',
      },
      regis_rules: {
        real_name: [
          {
            required: true,
            message: '姓名不能为空',
          }
        ],
        set_pawd: [
          {
            required: true,
            message: '密码不能为空'
          }
        ],
        sure_pawd: [
          {
            required: true,
            message: '确认密码不能为空'
          }
        ],
        phone_num: [
          {
            required: true,
            message: '手机号码不能为空'
          }
        ],
        verify_code: [
          {
            required: true,
            message: '图形验证码必填'
          }
        ],
        SMS_verify_code: [
          {
            required: true,
            message: '短信验证码必填'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(){
      this.global.regisPhoneNumber = this.register_info.phone_num;
      this.$router.push('/success');
    },
    numberVerifyChange(val){
      // 父子数据双向绑定
      this.register_info.verify_code = val;
    },
    smsVerifyChange(val){
      this.register_info.SMS_verify_code = val;
    },
    getVerifyCode(isImgVerify){

    }
  }
}
</script>

<style>
#regis_info {
  text-align: center;
  padding: 60px 20px;
  background: #54e1fb4a;
}
#regis_info > div {
  padding: 40px 20px;
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
}
#regis_info h1 {
  padding: 10px 0;
  font-size: 22px;
  font-weight: normal;
}
.regis_form {

  display: flex;
  flex-direction: column;
}
.regis_btn {
  width: 600px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
