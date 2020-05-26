<template>
  <div id="activityApply">
    <el-table
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
  </div>
</template>

<script>
import { Table, TableColumn, Button } from 'element-ui'
import { ajaxGet } from '../element-wrapper'
import { genericError } from '../func'
import { ACTIVITY } from '../api'
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button
  },
  data () {
    return {
      activityApplyTableData: [
        {
          id: 1,
          name: '年会',
          time: '2020-12-12',
          site: '江西',
          method: '线上',
          approve: false
        }
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
        this.activityApplyTableData = res.data.data
      }
    },
    initSignUp (row) {
      // ajaxGet(
      //   '', {},
      //   this.getSignUpResponse, genericError
      // )
      this.global.isSighUpPage = true
      this.$router.push('/success')
    },
    getSignUpResponse (res) {
      this.$router.push('/success')
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
  }
}
</script>

<style>

</style>
