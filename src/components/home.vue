<template>
  <div id="control-home">
    <div>
      <two-column-table
        class="member-info-table"
        :tableData="memberInfo"
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
import { MEMBER_INFO, INC_WORK_FORM } from '../api'
export default {

  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'two-column-table': twoColumnTable
  },
  data () {
    return {

      memberInfo: {
        head: '会员信息',
        body: {
          会员类型: ['申请人', '普通会员', '高级会员', '理事单位'][this.global.memberInfo.identity],
          状态: ['已注册，未提交申请', '申请正在审核中', '审核驳回，请检查申请信息', '审核通过，等待缴费', '缴费效验中', '缴费效验不通过，请重新确认', '缴费验证通过，已成为正式会员'][parseInt(this.global.formalMemberInfo.mbse_status)] ||
                '暂未成为正式会员',
          会员编码: this.global.formalMemberInfo.mbse_code ||
                   '暂未成为正式会员',
          有效期: this.global.formalMemberInfo.mbse_exp ||
                 '暂未成为正式会员',
          缴费情况: '暂未成为正式会员',
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
