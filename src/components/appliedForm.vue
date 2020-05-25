<template>
  <div id="applied-form">
    <el-button
      type="primary"
      size="small"
      @click="dialogBtn = true">开始申请
    </el-button>

    <el-table
      :data="appliedFormData"
      :cell-style="cellStyle"
      :header-cell-style="headStyle">

      <el-table-column
        prop="appliedMemberType"
        label="申请会员类型">

      </el-table-column>

      <el-table-column
        prop="appliedCondition"
        label="申请状态">

      </el-table-column>

      <el-table-column
        prop="appliedTime"
        label="申请发起日期">

      </el-table-column>

      <el-table-column
        label="操作"
        fixed="right"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">撤销</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog :visible.sync="dialogBtn">
      <h2>请选择您需要申请的会员类型</h2>
      <div class="apply-btn-2">

        <el-button
          v-for="(btn,index) in applyBtnInfo"
          :key="btn.text"
          :type="btn.type"
          @click.prevent="(btn.method)(index)">
          {{ btn.text }}
        </el-button>

      </div>
    </el-dialog>

  </div>
</template>

<script>
import { Table, TableColumn, Button, Dialog } from 'element-ui'
export default {
  components: {
    'el-button': Button,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-dialog': Dialog
  },
  data () {
    return {
      appliedFormData: [
        {
          appliedMemberType: '理事会员',
          appliedCondition: '审核中',
          appliedTime: '2020-12-12'
        }
      ],
      headStyle: {
        'text-align': 'center',
        background: '#fff'
      },
      cellStyle: {
        'text-align': 'center'
      },
      applyBtnInfo: [
        {
          type: 'primary',
          text: '普通会员申请',
          method: this.chooseApplyType
        },
        {
          type: 'success',
          text: '高级会员申请',
          method: this.chooseApplyType
        },
        {
          type: 'warning',
          text: '理事单位申请',
          method: this.chooseApplyType
        }
      ],
      dialogBtn: false
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    getApplyForm (index) {
      return [
        'normalMemberApplyForm',
        'seniorMemberApplyForm',
        'directorMemberApplyForm'
      ][index]
    },
    chooseApplyType (index) {
      const form = this.getApplyForm(index)
      this.showApplyBtn = false
      this.$router.push(`/memberService/apply/${form}`)
    }
  }
}
</script>

<style>
#applied-form {
  min-width: 60%;
  max-width: 70%;
  margin-left: 5%;
}
#applied-form > * {
  margin-bottom: 10px;
}
.apply-btn-2 {
  display: flex;
  justify-content: center;
}
#applied-form h2 {
  text-align: center;
  margin-bottom: 20px;

}
</style>
