<template>
  <div id="activityApply">
    <el-table
      v-if="this.global.formalMemberInfo.length !== 0 && this.global.applyForms && this.global.applyForms[0].mbse_status === '2006'"
      :data="activityApplyTableData"
      :row-class-name="tableRowClassName"
      style="max-height: 700px">
      <el-table-column
        prop="act_title"
        label="活动名称">

      </el-table-column>

      <el-table-column
        prop="act_date"
        label="活动时间">

      </el-table-column>

      <el-table-column
        prop="act_loc"
        label="活动地点">

      </el-table-column>

      <el-table-column
        prop="act_method"
        label="活动方式">

      </el-table-column>

      <el-table-column
        prop="audit_status"
        label="审核状态"
        :filters="filter"
        :filter-method="filterAct">

      </el-table-column>

      <el-table-column
        label="操作"
        fixed="right"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="learnMore(scope.row)">详情</el-button>
          <el-button
            type="text"
            size="small"
            v-if="scope.row.act_is_available"
            :disabled="true">活动已结束
          </el-button>
          <template v-else>
            <el-button
              @click="initSignUp(scope.row)"
              type="text"
              size="small"
              v-if="-1 !== ['申请通过', '您未申请该活动'].indexOf(scope.row.audit_status)"
              :disabled="scope.row.audit_status === '申请通过'">
              <i style="color:#67C23A;" class="el-icon-circle-check" v-if="scope.row.audit_status === '申请通过'">已报名</i>
              {{ scope.row.audit_status === '申请通过' ? '' : '报名' }}
            </el-button>
            <el-button
              @click="initConfirmCancelSignUp(scope.row.id)"
              type="text"
              size="small"
              v-if="['等待管理员处理申请', '申请通过'].indexOf(scope.row.audit_status) !== -1"
              style="color:#F56C6C;"
              >
              撤销
            </el-button>
          </template>

        </template>
      </el-table-column>

    </el-table>
    <p v-else>您还未成为正式会员，不能申请活动</p>
  </div>
</template>

<script>
import { Table, TableColumn, Button } from 'element-ui'
import { ajaxGet, ajaxPost, elmessage, elconfirm, ajaxDel } from '../element-wrapper'
import { genericError } from '../func'
import { ACTIVITY, ACTIVITY_APPLY, CANCEL_ACTIVITY_APPLY, ACTIVITY_APPLY_STATUS } from '../api'
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button
  },
  data () {
    return {
      activityApplyTableData: [],
      act_need_audit: false,
      filter: [
        {text: '未申请的活动', value: '您未申请该活动'},
        {text: '待处理申请', value: '等待管理员处理申请'},
        {text: '成功报名活动', value: '申请通过'},
        {text: '被拒绝的活动', value: '申请拒绝'},

      ]
    }
  },
  methods: {
    initGetActivityApply () {
      ajaxGet(
        ACTIVITY, {},
        this.getActivityResponse, genericError
      )
    },
    getActivityResponse (res) {
      if (parseInt(res.data.code) === 200) {
        for(let el of res.data.data) {
          el.audit_status = ACTIVITY_APPLY_STATUS[parseInt(el.audit_status)] || '您未申请该活动'
        }
        this.activityApplyTableData = res.data.data
      }
    },
    initSignUp (row) {
      this.act_need_audit = row.act_need_audit;
      let data = {
        relate_activity: row.id,
        audit_user: this.global.memberInfo.userid,
        audit_member: this.global.applyForms[0].id
      }
      ajaxPost(
        ACTIVITY_APPLY, data,
        this.getSignUpResponse, genericError,
      )
    },
    getSignUpResponse (res, row) {
      if(parseInt(res.data.code) === 201) {
        if(!this.act_need_audit){
          this.global.isSighUpPage = true
          this.$router.push('/success')
        } else {
          elmessage('报名成功', 'success');
          this.initGetActivityApply()
        }
      }
    },
    initGetResultOfApplyAct() {
      ajaxGet(
        ACTIVITY_APPLY, {},
        this.getResultResponse, genericError,
      )
    },
    getResultResponse(res) {
      console.log(res)
    },
    learnMore (row) {
      this.global.activityDetails = row
      // ajaxGet(
      //   '', {},
      //   this.succGetLearnMoreActivityDetails, genericError
      // )
      this.$router.push(`/memberService/memberActivity/activityApply/${row.id}`)
    },
    succGetLearnMoreActivityDetails (res) {
      this.$router.push(`/memberService/memberActivity/activityApply/${row.id}`)
    },
    initConfirmCancelSignUp(id) {
      elconfirm(
        '', '您确定要撤销此活动申请吗?',
        [id], this.initCancelSignUp,
        genericError,
      )

    },
    initCancelSignUp(id) {
      ajaxDel(
        CANCEL_ACTIVITY_APPLY(id), {id},
        this.getCancelSignUpRespnse, genericError
      )
    },
    getCancelSignUpRespnse(res) {
      if(parseInt(res.data.code) === 200) {
        this.initGetActivityApply()
      } else {
        elmessage('撤销失败', 'error')
      }

    },
    tableRowClassName({row, rowIndex}) {
      if(row.act_is_available) {
        return 'finish-act'
      }
      if(row.audit_status === '申请通过') {
        return 'sign-up'
      }

    },
    filterAct(value, row, column) {
      return value === row.audit_status;
    }
  },
  mounted () {
    this.initGetActivityApply()
  }
}
</script>

<style>
.el-table .finish-act {
  background-color: #dedee0;
  color: #a9a4a4;
}
.el-table .sign-up {
  background-color: rgba(116, 237, 104, 0.48);
}
</style>
