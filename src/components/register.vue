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

          <el-form-item label="用户名:" prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="register_info.username">
            </el-input>
          </el-form-item>

          <el-form-item label="设置密码:" prop="password">
            <el-input
              type="password"
              placeholder="6-16的数字和字母组合"
              v-model="register_info.password"
              maxlength="16"
              show-password
              show-word-limit>
            </el-input>
          </el-form-item>

          <el-form-item label="确认密码:" prop="sure_pawd">
            <el-input
              type="password"
              placeholder="请再次输入密码"
              v-model="register_info.sure_pawd"
              maxlength="16"
              show-password
              show-word-limit>
            </el-input>
          </el-form-item>

          <el-form-item label="手机号:" v-if="phone_verify_on" prop="phone">
            <el-input
              placeholder="请输入手机号"
              v-model="register_info.phone">
            </el-input>
          </el-form-item>

          <el-form-item label="会员类型:" prop="identity">
            <el-radio-group v-model="register_info.identity">
              <el-radio-button label="普通会员" ></el-radio-button>
              <el-radio-button label="高级会员"></el-radio-button>
              <el-radio-button label="理事单位会员"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="验证码:" prop="verify_code">
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
          </el-form-item> -->

        </el-form>

        <el-radio
          label="1"
          v-model="hasReadDoc" >
          我已阅读江西省心理咨询师协会会员条例，并遵守相关规定。
        </el-radio>
        <br />
        <el-button
          class="regis_btn"
          type="primary"
          :disabled="!hasReadDoc"
          @click="initRegister('ruleForm')">
          注册
        </el-button>

      </div>

    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Radio, Image, RadioGroup, RadioButton } from 'element-ui'
import { ajaxPost, elmessage, registerPost } from '../element-wrapper'
import { genericError, validValue } from '../func'
import { SIGN_UP } from '../api'
export default {
  name: 'register',
  components: {
    'el-input': Input,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-button': Button,
    'el-radio': Radio,
    'el-image': Image,
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton
  },
  data () {
    return {
      phone_verify_on: true,
      hasReadDoc: '1',
      register_info: {
        username: '',
        password: '',
        sure_pawd: '',
        phone: '',
        identity: ''
      },
      regis_rules: {
        username: [
          {
            required: true,
            message: '姓名不能为空'
          }
        ],
        password: [
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
        phone: [
          {
            required: true,
            message: '手机号码不能为空'
          }
        ],
        identity: [
          {
            required: true,
            message: '会员类型必选'
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
    initRegister () {
      if (this.hasReadDoc === '1' &&
        validValue(this.register_info) &&
        this.register_info.password === this.register_info.sure_pawd
      ) {
        const identity_code = identity => {
          return {
            普通会员: 1001,
            高级会员: 1002,
            理事单位会员: 1003
          }[identity]
        }
        this.register_info.identity = identity_code(this.register_info.identity);
        delete this.register_info.sure_pawd;
        registerPost(
          SIGN_UP, this.register_info,
          this.succRegister, genericError
        )
        this.global.regisPhoneNumber = this.register_info.phone
      } else {
        elmessage('信息不完整或密码不一致', 'error')
      }
    },
    succRegister (res) {
      // console.log(res.data)
      if (parseInt(res.data.code) === 201) {
        this.$router.push('/success')
      } else {
        elmessage('注册失败', 'error')
      }
    },

    numberVerifyChange (val) {
      // 父子数据双向绑定
      this.register_info.verify_code = val
    },
    smsVerifyChange (val) {
      this.register_info.SMS_verify_code = val
    },
    getVerifyCode (isImgVerify) {

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
  font-size: 1.6em;
  margin-bottom: 20px;
  position: relative;
  color: #409EFF;
}
#regis_info h1::before {
  position: absolute;
  content: '';
  bottom: 0px;
  width: 15px;
  height: 5px;
  border-radius: 10%;
  background-color: #409EFF;
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
