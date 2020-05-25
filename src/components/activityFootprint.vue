<template>
  <div id="finished-activity-content">
    <div>
      <el-tabs
        id="finished-activity"
        tab-position="left"
        >
        <el-tab-pane
          v-for="activity in activityApplyTableData"
          :key="activity.name"
          :label="activity.name">
          <div class="finished-activity-info">
            <table cellspacing="0" align="center" border="0">

              <tr>
                <th colspan="2">活动记录表</th>
              </tr>

              <tr
                v-for="(field,_,index) in activity"
                :key="field">
                <td>{{ fieldName[index] }}</td>
                <td>{{ field }}</td>
              </tr>

              <tr>
                <td>活动感悟</td>
                <td>
                  <el-input type="textarea" v-model="perception" key="perception"/>
                </td>
              </tr>

              <tr>
                <td>活动建议</td>
                <td>
                  <el-input type="textarea" v-model="advice" key="advice" />
                </td>
              </tr>

            </table>
          </div>
        </el-tab-pane>
      </el-tabs>

      <el-button
        class="activity-summary-btn"
        type="primary"
        @click="initSubmitActivitySummary">提交活动总结</el-button>

    </div>
  </div>
</template>

<script>
import { Tabs, TabPane, Input, Button } from 'element-ui'
import { ajaxGet } from '../element-wrapper'
import { genericError } from '../func'
export default {
  components: {
    'el-tabs': Tabs,
    'el-tab-pane': TabPane,
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      fieldName: ['活动名称', '活动时间', '活动地点', '活动方式'],
      activityApplyTableData: [
        {
          name: '年会',
          time: '2020-12-12',
          site: '江西',
          method: '在线视频'
        }
      ],

      perception: '',
      advice: ''
    }
  },
  methods: {
    initGetFinishedActivity () {
      ajaxGet(
        '', {},
        this.getFinishedActivityResponse, genericError
      )
    },
    getFinishedActivityResponse (res) {

    },
    initSubmitActivitySummary () {
      const param = {
        perception: this.perception,
        advice: this.advice
      }
      console.log(param)
      ajaxGet(
        '', {},
        this.getSubmitActivitySummaryResponse, genericError
      )
    },
    getSubmitActivitySummaryResponse (res) {

    }
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
