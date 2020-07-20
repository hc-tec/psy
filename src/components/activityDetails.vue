<template>
  <div class="activity-details">
    <div>
      <two-column-table
        :tableData="details"
      />
      <div class="activity-operate-btn">
        <el-button
          type="primary"
          @click="initSignUp"
          :disabled="this.global.activityDetails.audit_status === '申请通过' || this.global.activityDetails.act_is_available">
          {{ this.global.activityDetails.audit_status === '申请通过' ? '已报名' : this.global.activityDetails.act_is_available ? '活动已结束' : '报名' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import twoColumnTable from './two-column-table'
import { ajaxPost, elmessage } from '../element-wrapper'
import { ACTIVITY_APPLY } from '../api'
import { genericError } from '../func'
export default {
  components: {
    'el-button': Button,
    'two-column-table': twoColumnTable
  },
  data () {
    return {
      details: {
        head: '活动详情',
        body: {
          活动名称: this.global.activityDetails.act_title,
          活动时间: this.global.activityDetails.act_date,
          活动地点: this.global.activityDetails.act_loc,
          活动方式: this.global.activityDetails.act_method,
          活动描述: this.global.activityDetails.act_description,
          是否结束: this.global.activityDetails.act_is_available === false ? '否' : '是',
          是否需要审核: this.global.activityDetails.act_need_audit === false ? '无需审核' : '需要审核',
        }
      },
      act_need_audit: false,
    }
  },
  methods: {
    initSignUp () {
      this.act_need_audit = this.global.activityDetails.act_need_audit;
      let data = {
        relate_activity: this.global.activityDetails.id,
        audit_user: this.global.memberInfo.userid,
        audit_member: this.global.applyForms[0].id
      }
      ajaxPost(
        ACTIVITY_APPLY, data,
        this.getSignUpResponse, genericError,
      )
    },
    getSignUpResponse (res) {
      if(parseInt(res.data.code) === 201) {
        if(!this.act_need_audit){
          this.global.isSighUpPage = true
          this.$router.push('/success')
        } else {
          elmessage('报名成功', 'success');
        }
      }
    },
  }
}
</script>

<style>
.activity-details {
  margin-left: 240px;
  padding: 20px;
}
.activity-details > div {
  background-color: #fff;
  padding: 40px;
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.activity-info-table {
  width: 100%;
  margin-bottom: 20px;
}
.activity-info-table th {
  font-size: 1.4em;
  color: #409EFF;
  text-align: left;
  position: relative;
}
.activity-info-table th::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  background: #409EFF;
}
.activity-info-table > tr {
  line-height: 3;
}
.activity-info-table > tr > td {
  border-bottom: 1px solid lightblue;
  /* text-align: left; */
  padding-left: 10px;
}
.activity-info-table > tr > td:nth-child(1) {
  font-weight: bold;
  width: 50%;
}
.activity-info-table > tr >td:nth-child(2) {
  width: 50%;
  word-break: break-all;
}

.activity-operate-btn {
  width: 100%;
  text-align: center;
}

</style>
