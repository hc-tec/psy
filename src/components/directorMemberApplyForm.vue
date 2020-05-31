<template>
  <div class="seniorForm">
    <div class="Form">
      <table cellspacing="0" align="center" border="0">

        <tr>
          <th colspan="4">江西省心理咨询师协会理事单位申请登记表</th>
        </tr>

        <tr>
          <td>单位全称</td>
          <td colspan="4">
            <el-input v-model="applyFormData.mbse_name" />
          </td>
        </tr>

        <tr>
          <td>所在地区及办公地址</td>
          <td>
            <el-input v-model="applyFormData.inc_loc" />
          </td>
          <td>邮编</td>
          <td>
            <el-input v-model="applyFormData.inc_code" />
          </td>
        </tr>

        <tr>
          <td>电话</td>
          <td>
            <el-input v-model="applyFormData.inc_phone" />
          </td>
          <td>传真</td>
          <td>
            <el-input v-model="applyFormData.inc_fax" />
          </td>
        </tr>

        <tr>
          <td>电子邮箱</td>
          <td>
            <el-input v-model="applyFormData.inc_email" />
          </td>
          <td>网址</td>
          <td>
            <el-input v-model="applyFormData.inc_site" />
          </td>
        </tr>

        <tr>
          <td>主管机关</td>
          <td>
            <el-input v-model="applyFormData.inc_charge" />
          </td>
          <td>组织机构代码</td>
          <td>
            <el-input v-model="applyFormData.inc_charge_code" />
          </td>
        </tr>

        <tr>
          <td>法定代表</td>
          <td>
            <el-input v-model="applyFormData.inc_corporate" />
          </td>
          <td>法人代表联系方式</td>
          <td>
            <el-input v-model="applyFormData.inc_corp_phone" />
          </td>
        </tr>

        <tr>
          <td>推举理事</td>
          <td>
            <el-input v-model="applyFormData.inc_director" />
          </td>
          <td>理事手机</td>
          <td>
            <el-input v-model="applyFormData.inc_director_phone" />
          </td>
        </tr>

        <tr>
          <td rowspan="3">申请理事单位负责人意见</td>
          <td rowspan="3" colspan="3">
            <el-input
              type="textarea"
              resize="none"
              :rows="3"
              v-model="applyFormData.inc_opinion" />
          </td>
        </tr>

        <tr></tr>
        <tr></tr>

        <tr>
          <td>协会审批</td>
          <td rowspan="3" colspan="3">
            <el-input
              type="textarea"
              resize="none"
              :rows="3"
              v-model="applyFormData.mbse_judge"
              disabled />
          </td>
        </tr>

        <tr></tr>
        <tr></tr>

        <tr>
          <td rowspan="3">备注</td>
          <td rowspan="3" colspan="3">
            <el-input
              type="textarea"
              resize="none"
              :rows="3"
              v-model="applyFormData.inc_info" />
          </td>
        </tr>

      </table>
    </div>
    <div class="work-btn">
      <el-button type="primary" @click="submitApplyForm">提交</el-button>
    </div>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui'
import { ajaxPut, ajaxPost, elmessage } from '../element-wrapper'
import { APPLY_ICN_WORK_FORM_MODIFY, INC_WORK_FORM } from '../api'
import { genericError } from '../func'

export default {
  components: {
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      applyFormData: Object.keys(this.global.editForm).length > 0 ? this.global.editForm : {
        mbse_name: 'as',
        inc_loc: 'asa',
        inc_code: 'as',
        inc_phone: 'as',
        inc_fax: 'as',
        inc_email: 'as',
        inc_site: 'as',
        inc_charge: 'as',
        inc_charge_code: 'fds',
        inc_corporate: 'sdfsd',
        inc_corp_phone: 'sdf',
        inc_director: 'sdf',
        inc_director_phone: 'asd',
        inc_opinion: 'as',
        mbse_judge: '',
        inc_info: 'as'
      }
    }
  },
  methods: {
    submitApplyForm() {
      let applyFormData = this.applyFormData;
      applyFormData.mbse_user = this.global.memberInfo.userid;

      if(typeof this.global.editForm.id === 'number' || this.global.applyForms.length >= 1) {
        ajaxPut(
          APPLY_ICN_WORK_FORM_MODIFY(this.global.editForm.id), applyFormData,
          this.getApplyFormResponse, genericError
        )
      } else {
        ajaxPost(
          INC_WORK_FORM, applyFormData,
          this.getApplyFormResponse, genericError
        )
      }
    },
    getApplyFormResponse(res) {
      if(parseInt(res.data.code) === 201) {
        elmessage('提交成功', 'success');
        this.$router.push('/memberService/apply/chooseApplyForm/');
      }
      console.log(res)
    }
  },
  mounted() {
    console.log(this.global.editForm)
  }
}
</script>

<style>
.seniorForm {
  background: #f7f7f8;
  padding: 20px 10px;
}
.seniorForm .el-input {
  min-width: 200px;
  max-width: 90%;
}
.seniorForm table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-bottom: 20px;
}
.seniorForm table tr > td:nth-of-type(odd) {
  font-size: 14px;
  font-weight: bold;
  color: #34495e;
}
.seniorForm table tr th {
  font-size: 1.4em;
  line-height: 3;
}
.seniorForm table tr th,
.seniorForm table tr td {
  border: 1px solid #cfd3d5;
  padding: 8px 10px 8px 15px !important;
}

.work-btn {
  display: flex;
  justify-content: center;
}
.work-btn > * {
  margin-right: 20px;
  width: 100px;
}
</style>
