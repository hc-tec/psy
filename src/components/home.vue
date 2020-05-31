<template>
  <div id="control-home">
    <div>
      <two-column-table
        class="member-info-table"
        :tableData="userInfo"
      />
      <p class="member-info">说明</p>
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
          选择申请的会员类型: this.global.memberInfo ? USER_IDENTITY_STATUS[parseInt(this.global.memberInfo.identity)] : '加载中',
          状态: this.valid ? MEMBER_APPLY_STATUS[parseInt(this.global.applyForms[0].mbse_status)] : MEMBER_APPLY_STATUS[parseInt(this.global.formalMemberInfo.mbse_status)] ||
                '申请人',
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
  width: 600px;
  margin: 0 auto;
}
.member-info {
  font-weight: bold;
  color: #409EFF;
  position: relative;
  font-size: 1.2em;
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
</style>
