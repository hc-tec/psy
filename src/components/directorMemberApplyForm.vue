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
            <el-input v-model="applyFormData.companyFullName" />
          </td>
        </tr>

        <tr>
          <td>所在地区及办公地址</td>
          <td>
            <el-input v-model="applyFormData.companyArea" />
          </td>
          <td>邮编</td>
          <td>
            <el-input v-model="applyFormData.postCode" />
          </td>
        </tr>

        <tr>
          <td>电话</td>
          <td>
            <el-input v-model="applyFormData.phoneNum" />
          </td>
          <td>传真</td>
          <td>
            <el-input v-model="applyFormData.fax" />
          </td>
        </tr>

        <tr>
          <td>电子邮箱</td>
          <td>
            <el-input v-model="applyFormData.email" />
          </td>
          <td>网址</td>
          <td>
            <el-input v-model="applyFormData.website" />
          </td>
        </tr>

        <tr>
          <td>主管机关</td>
          <td>
            <el-input v-model="applyFormData.competentAuthority" />
          </td>
          <td>组织机构代码</td>
          <td>
            <el-input v-model="applyFormData.organizationCode" />
          </td>
        </tr>

        <tr>
          <td>法定代表</td>
          <td>
            <el-input v-model="applyFormData.legalRepresentative" />
          </td>
          <td>法人代表联系方式</td>
          <td>
            <el-input v-model="applyFormData.legalRepresentativePhoneNum" />
          </td>
        </tr>

        <tr>
          <td>推举理事</td>
          <td>
            <el-input v-model="applyFormData.electionDirectors" />
          </td>
          <td>理事手机</td>
          <td>
            <el-input v-model="applyFormData.electionDirectorsPhoneNum" />
          </td>
        </tr>

        <tr>
          <td rowspan="3">申请理事单位负责人意见</td>
          <td rowspan="3" colspan="3">
            <el-input
              type="textarea"
              resize="none"
              :rows="3"
              v-model="applyFormData.companyHeadOpinion" />
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
              v-model="applyFormData.approve" />
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
              v-model="applyFormData.remarks" />
          </td>
        </tr>

      </table>
    </div>
    <div class="work-btn">
      <el-button type="success">保存</el-button>
      <el-button type="primary" @click="submitApplyForm">提交</el-button>
    </div>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui'

export default {
  components: {
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      applyFormData: {
        companyFullName: '',
        companyArea: '',
        companyAddr: '',
        postCode: '',
        phoneNum: '',
        fax: '',
        email: '',
        website: '',
        competentAuthority: '',
        organizationCode: '',
        legalRepresentative: '',
        legalRepresentativePhoneNum: '',
        electionDirectors: '',
        electionDirectorsPhoneNum: '',
        companyHeadOpinion: '',
        approve: '',
        remarks: ''
      }
    }
  },
  methods: {
    submitApplyForm () {

    }
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
