<template>
  <div id="success">
    <img :src="logo" style="margin: 10px 0 0 100px" />
    <el-divider></el-divider>
    <div id="success-content">
      <div class="success-info">
        <i class="el-icon-success"></i>
        <div v-if="!sighUpPage">
          <h3>恭喜您，已经注册成功！</h3><br />
          <span>注册手机号：</span>
          <span>{{ this.global.regisPhoneNumber }}</span>
        </div>

        <div v-else>
          <h3>恭喜您报名成功</h3>
        </div>

      </div>
      <el-divider></el-divider>

      <el-button
        type="primary"
        v-if="!sighUpPage"
        @click="login">登录
      </el-button>

      <el-button
        type="primary"
        v-else
        @click="backToActivityPage">
        返回
      </el-button>

    </div>
  </div>
</template>

<script>
import { Button, Divider } from 'element-ui'
export default {
  components: {
    'el-button': Button,
    'el-divider': Divider
  },
  data () {
    return {
      logo: this.global.logo,
      sighUpPage: this.global.isSighUpPage
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    backToActivityPage () {
      this.$router.push('/memberService/memberActivity/activityApply')
    }
  }

}
</script>

<style>
#success {
  height: 100vh;
  background: url('/img/浑天刷.jpg') no-repeat;
  background-size: cover;
}
#success-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.success-info > i {
  font-size: 4em;
  color: #67C23A;
  float: left;
  margin-right: 20px;
}
.success-info > div:nth-child(2) {
  float: right;
}
</style>
