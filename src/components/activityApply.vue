<template>
  <div id="activityApply">
    <el-table
      v-if="this.global.formalMemberInfo.length !== 0"
      :data="activityApplyTableData">
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
        label="操作"
        fixed="right"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="learnMore(scope.row)">详情</el-button>
          <el-button @click="initSignUp(scope.row)" type="text" size="small">报名</el-button>
        </template>
      </el-table-column>

    </el-table>
    <p v-else>您还未成为正式会员，不能申请活动</p>
  </div>
</template>

<script>
import { Table, TableColumn, Button } from 'element-ui'
import { ajaxGet, ajaxPost, elmessage } from '../element-wrapper'
import { genericError } from '../func'
import { ACTIVITY, ACTIVITY_APPLY } from '../api'
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
    }
  },
  mounted () {
    this.initGetActivityApply()
    this.initGetResultOfApplyAct()
  }
}
</script>

<style>

</style>
