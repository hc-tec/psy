<template>
  <el-form :model="search" label-width="120px" label-position="right">
    <el-form-item label="姓名">
      <el-input v-model="search.username" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="身份证">
      <el-input v-model="search.ID" placeholder="身份证"></el-input>
    </el-form-item>
    <el-form-item label="注册电话号码">
      <el-input v-model="search.phone" placeholder="注册电话号码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Input, Form, FormItem, Button } from 'element-ui'
export default {
  components: {
    'el-input': Input,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-button': Button
  },
  data(){
    return {
      search: {
        'username': '',
        'ID': '',
        'phone': ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style>

</style>
