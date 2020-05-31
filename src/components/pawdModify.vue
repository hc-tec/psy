<template>
  <div id="password-modifier">
    <el-form
      label-width="80px"
      class="password-modifier-form"
      :rules="rules"
      :model="passwordModifyForm">

      <el-form-item label="用户名" prop="username">
        <el-input v-model="passwordModifyForm.username" />
      </el-form-item>

      <el-form-item label="新密码" prop="password">
        <el-input v-model="passwordModifyForm.password" show-password />
      </el-form-item>

      <el-form-item label="确认密码" prop="sureNewPassword">
        <el-input v-model="passwordModifyForm.sureNewPassword" show-password />
      </el-form-item>

      <el-form-item label="手机号" prop="phone">
        <el-input v-model="passwordModifyForm.phone" />
      </el-form-item>


    </el-form>
    <div class="modify-btn">
      <el-button
        type="primary"
        style="width:100%;"
        @click="update">确认修改
      </el-button>
    </div>
  </div>
</template>

<script>
import { Button, Input, Form, FormItem } from 'element-ui'
import { validValue, genericError } from '../func'
import { elmessage, ajaxPost } from '../element-wrapper'
import { USER_INFO_MODIFY } from '../api'
export default {
  components: {
    'el-button': Button,
    'el-input': Input,
    'el-form': Form,
    'el-form-item': FormItem,
  },
  data () {
    return {
      passwordModifyForm: {
        username: this.global.memberInfo.username || '',
        password: '',
        sureNewPassword: '',
        phone: '',
        identity: this.global.memberInfo.identity,
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入新密码'
          }
        ],
        sureNewPassword: [
          {
            required: true,
            message: '请确认新密码'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号'
          }
        ],
        identity: [
          {
            required: true,
            message: '请选择用户类型'
          }
        ]
      }
    }
  },
  methods: {
    update () {
      if (validValue(this.passwordModifyForm) &&
        this.passwordModifyForm.password === this.passwordModifyForm.sureNewPassword
      ) {
        delete this.passwordModifyForm.sureNewPassword
        ajaxPost(
          USER_INFO_MODIFY, this.passwordModifyForm,
          this.updateResponse, genericError
        )
      } else {
        elmessage('信息不能为空或前后密码不一致', 'error');
      }
    },
    updateResponse (res) {
      if(parseInt(res.data.code) === 200) {
        elmessage('信息修改成功！', 'success');
        this.$router.push('/memberService/home');
      } else {
        elmessage('信息修改失败！', 'error');
      }
    }
  }
}
</script>

<style>

.password-modifier-form {
  background-color: #fff;
  padding: 30px 20px;
  width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 20px;
}
.modify-btn {
  width: 200px;
  margin: 0 auto;
}
</style>
