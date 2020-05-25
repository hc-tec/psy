<template>
  <div>
    <el-input
      :prefix-icon="prefixIcon"
      :style="verify_style"
      :placeholder="placeholder"
      v-model="tmp_verify_code">
    </el-input>
    <img
      :src="src"
      v-if="imgVerify"
      :style="verify_img_style"
      @click="getVerifyCode" />

    <el-button
      type="primary"
      v-if="!imgVerify"
      :style="verify_img_style"
      @click="getVerifyCode">
      获取验证码
    </el-button>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui'
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    // 验证码图片链接
    src: String,
    // 所输入的验证码值，进行双向绑定
    verify_code: String,
    // 是否为图片验证，否则为获取验证码按钮
    imgVerify: {
      type: Boolean,
      default: true
    },
    prefixIcon: {
      type: String,
      default: ''
    }
  },
  components: {
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      verify_style: {
        width: '60%',
        display: 'block',
        float: 'left',
        'margin-right': '5%'
      },
      verify_img_style: {
        height: '40px',
        width: '35%',
        'border-radius': '3px',
        cursor: 'pointer'
      },
      tmp_verify_code: this.verify_code
    }
  },
  methods: {
    getVerifyCode () {
      this.$emit('getVerifyCode', this.imgVerify)
    }
  },
  watch: {
    tmp_verify_code (val) {
      this.$emit('data-on-change', val)
    }
  }
}
</script>

<style>

</style>
