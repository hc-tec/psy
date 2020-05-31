<template>
  <el-form
    class="search"
    :model="search"
    label-width="120px"
    label-position="right">
    <el-form-item label="姓名">
      <el-input v-model="search.name" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="身份证">
      <el-input v-model="search.id" placeholder="身份证"></el-input>
    </el-form-item>
    <el-form-item label="电话号码">
      <el-input v-model="search.phone" placeholder="电话号码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Input, Form, FormItem, Button } from 'element-ui'
import { ajaxPost, elmessage, registerPost } from '../element-wrapper'
import { IS_USER } from '../api'
import { genericError, validValue } from '../func'
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
        'name': 'asdas',
        'id': '362525200202034511',
        'phone': 'asfhf'
      }
    }
  },
  methods: {
    onSubmit() {
      if(validValue(this.search)) {
        ajaxPost(
          IS_USER, this.search,
          this.getSearchResponse, genericError
        )
      } else {
        elmessage('信息不完整', 'error');
      }

    },
    getSearchResponse(res) {
      if(parseInt(res.data.code) === 200) {
        alert('您是本协会成员')
      }
    }
  }
}
</script>

<style>

</style>
