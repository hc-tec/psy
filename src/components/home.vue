<template>
  <div id="control-home">
    <div>


      <two-column-table
        class="member-info-table"
        :tableData="userInfo"
      />
      <p class="member-info">说明</p>
      <table class="explain" cellspacing="0" align="center" border="0">
        <tr>
          <th>会员类型</th>
          <th>状态</th>
          <th>会员编号</th>
          <th>有效期</th>
        </tr>
        <tr>
          <th rowspan="3">申请人</th>
          <td>未提交申请</td>
          <td rowspan="3">空</td>
          <td rowspan="3">空</td>
        </tr>
        <tr>
          <td>已提交申请，待审核</td>
        </tr>
        <tr>
          <td>审核不通过</td>
        </tr>

        <!-- <tr>
          <th rowspan="3">非在册会员</th>
          <td rowspan="2">已通过审核，代缴费</td>
          <td>临时编号</td>
          <td rowspan="2">空</td>
        </tr>
        <tr>
          <td>空</td>
        </tr>
        <tr>
          <td>老会员，未缴费</td>
          <td>正式编号</td>
          <td>已过期</td>
        </tr> -->

        <tr>
          <th>普通会员/高级会员/理事会员</th>
          <td>正常缴费</td>
          <td>正式编号</td>
          <td>实际有效期</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
import twoColumnTable from './two-column-table'
import { ajaxGet } from '../element-wrapper'
import { genericError } from '../func'
import { MEMBER_INFO, INC_WORK_FORM, USER_IDENTITY_STATUS, MEMBER_APPLY_STATUS, ORDER_STATUS } from '../api'
export default {

  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'two-column-table': twoColumnTable
  },
  data () {
    return {
      valid: this.global.applyForms.length !== 0,
      userInfo: {
        head: '会员信息',
        body: {
          会员类型: (this.global.applyForms.length !== 0) ? (2006 === parseInt(this.global.applyForms[0].mbse_status) ? USER_IDENTITY_STATUS[parseInt(this.global.memberInfo.identity)] : '申请人') : '申请人',
          状态: this.valid ? MEMBER_APPLY_STATUS[parseInt(this.global.applyForms[0].mbse_status)] : MEMBER_APPLY_STATUS[parseInt(this.global.formalMemberInfo.mbse_status)] ||
                '未提交申请	',
          会员编码: this.valid ? this.global.applyForms[0].mbse_code : this.global.formalMemberInfo.mbse_code ||
                   '',
          有效期: this.valid ? this.global.applyForms[0].mbse_exp : this.global.formalMemberInfo.mbse_exp ||
                 '',
          缴费情况: this.global.payListData.length !== 0 ? this.global.payListData[0].status : '暂未成为正式会员',
        }
      }
    }
  },
  methods: {
    // initGetMemberInfo() {

    //   ajaxGet(
    //     url, {},
    //     this.succGetMemberInfo, genericError
    //   )
    // },
    // succGetMemberInfo(res) {
    //   if (res.code === 200) {
    //     const data = res.data[0]
    //     this.memberInfo.body['会员类型'] = data.mbse_type || ''
    //     this.memberInfo.body['状态'] = data.mbse_status
    //     this.memberInfo.body['会员编码'] = data.mbse_code
    //     this.memberInfo.body['有效期'] = data.mbse_exp
    //     this.memberInfo.body['缴费情况'] = ''
    //     this.global.memberInfo = data
    //   }
    // }
  }
}
</script>

<style>
#control-home > div:nth-child(1) {
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  width: 800px;
  margin: 0 auto;
}
#control-home > div > * {
  margin-bottom: 20px;
}
.member-info {
  font-weight: bold;
  color: #409EFF;
  position: relative;
  font-size: 1.4em;
}
.member-info::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
  top: 0;
  left: -10px;
  background: #409EFF;
}
.explain {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: "微软雅黑";
}
.explain th {
  background-color: #f8f8f8;
}
.explain tr {
  transition: background-color .3s;
}
.explain tr:hover {
  background-color: rgb(245,247,250);
}
.explain tr th,
.explain tr td {
  border: 1px solid #cfd3d5;
  padding: 8px 10px 8px 15px !important;

}
</style>
