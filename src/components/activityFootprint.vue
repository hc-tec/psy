<template>
  <div id="finished-activity-content">
    <div>
      <el-tabs
        id="finished-activity"
        tab-position="left"
        v-model="index"
        v-if="activityApplyTableData.length !== 0"
        >
        <el-tab-pane
          v-for="activity in activityApplyTableData"
          :key="activity.diary_title"
          :label="activity.diary_title">
          <div class="finished-activity-info">
            <table cellspacing="0" align="center" border="0">

              <tr>
                <th colspan="2">活动记录表</th>
              </tr>

              <!-- <tr
                v-for="(field,_,index) in activity"
                :key="field">
                <td>{{ fieldName[index] }}</td>
                <td>{{ field }}</td>
              </tr> -->

              <tr>
                <td>{{ fieldName[0] }}</td>
                <td>{{ activity.diary_title }}</td>
              </tr>

              <tr>
                <td>{{ fieldName[1] }}</td>
                <td>{{ activity.diary_date }}</td>
              </tr>

              <tr>
                <td>{{ fieldName[2] }}</td>
                <td>{{ activity.diary_loc }}</td>
              </tr>

              <tr>
                <td>{{ fieldName[3] }}</td>
                <td>{{ activity.diary_method }}</td>
              </tr>
              <template v-if="hasExecute[index]">
                <tr>
                  <td>活动感悟</td>
                  <td>{{ activity.diary_exp }}</td>
                </tr>
                <tr>
                  <td>活动建议</td>
                  <td>{{ activity.diary_advice }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td>活动感悟</td>
                  <td>
                    <el-input type="textarea" v-model="activity.diary_exp" key="diary_exp" />
                  </td>
                </tr>

                <tr>
                  <td>活动建议</td>
                  <td>
                    <el-input type="textarea" v-model="activity.diary_advice" key="diary_advice" />
                  </td>
                </tr>
              </template>

            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <p v-else>暂无数据</p>
      <el-button
        class="activity-summary-btn"
        type="primary"
        @click="initSubmitActivitySummary"
        v-if="!hasExecute[index] && this.activityApplyTableData.length > 0">
        提交活动总结
      </el-button>

    </div>
  </div>
</template>

<script>
import { Tabs, TabPane, Input, Button } from 'element-ui'
import { ajaxGet, ajaxPut, elmessage } from '../element-wrapper'
import { genericError } from '../func'
import { ACTIVITY_FOOTPRINT, ACTIVITY_PERCEPTION } from '../api'
export default {
  components: {
    'el-tabs': Tabs,
    'el-tab-pane': TabPane,
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      index: '0',
      fieldName: ['活动名称', '活动时间', '活动地点', '活动方式'],
      activityApplyTableData: [],
      hasExecute: []
    }
  },
  methods: {
    hasSubmitted(activity) {
      if(this.hasExecute[activity.id]) {
        return true
      } else {
        this.hasExecute[activity.id] = true;
        return activity.diary_exp.length !== 0 && activity.diary_advice.length !== 0
      }
    },
    initGetFinishedActivity() {
      ajaxGet(
        ACTIVITY_FOOTPRINT, {},
        this.getFinishedActivityResponse, genericError
      )
    },
    getFinishedActivityResponse(res) {
      if(parseInt(res.data.code) === 200) {
        this.activityApplyTableData = res.data.data;
        for(let el of res.data.data) {
          if(el.diary_exp.length !== 0 && el.diary_advice.length !== 0) {
            this.hasExecute.push(true)
          } else {
            this.hasExecute.push(false)
          }
        }
      }
    },
    initSubmitActivitySummary() {
      ajaxPut(
        ACTIVITY_PERCEPTION(this.activityApplyTableData[this.index].id), this.activityApplyTableData[this.index],
        this.getSubmitActivitySummaryResponse, genericError
      )
    },
    getSubmitActivitySummaryResponse(res) {
      if(parseInt(res.data.code) === 201) {
        this.$set(this.hasExecute, parseInt(this.index), true);
        elmessage('提交成功', 'success');
      }
      console.log(res);
    }
  },
  created() {
    this.initGetFinishedActivity()
  }
}
</script>

<style>
#finished-activity-content > div {
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.finished-activity-info {
  padding: 20px 10px;
  width: 600px;
  margin: 0 auto;
}
.finished-activity-info .el-input {
  min-width: 200px;
  max-width: 90%;
}
.finished-activity-info table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-bottom: 20px;
}
.finished-activity-info table tr > td:nth-of-type(odd) {
  font-size: 14px;
  font-weight: bold;
  color: #34495e;
}
.finished-activity-info table tr th {
  font-size: 1.4em;
  line-height: 3;
}
.finished-activity-info table tr th,
.finished-activity-info table tr td {
  border: 1px solid #cfd3d5;
  padding: 8px 10px 8px 15px !important;
}
.activity-summary-btn {
  width: 20%;
  margin: 0 40%;
}
</style>
