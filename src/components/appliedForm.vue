<template>
  <div id="applied-form">
    <el-button
      type="primary"
      size="small"
      v-if="this.global.applyForms.length === 0"
      @click="chooseApplyType">开始申请
    </el-button>

    <el-table
      :data="appliedFormData"
      :cell-style="cellStyle"
      :header-cell-style="headStyle">

      <el-table-column
        prop="mbr_type"
        label="申请会员类型"
        width="200px">

      </el-table-column>

      <el-table-column
        prop="mbse_status"
        label="申请状态"
        width="300px">

      </el-table-column>

      <el-table-column
        prop="appliedTime"
        label="申请发起日期"
        width="300px">

      </el-table-column>

      <el-table-column
        label="操作"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="editForm(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!-- <el-dialog :visible.sync="dialogBtn">
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
    </el-dialog> -->

  </div>
</template>

<script>
import { Table, TableColumn, Button, Dialog } from 'element-ui'
import { ajaxGet } from '../element-wrapper'
import { COMMON_WORK_FORM, INC_WORK_FORM } from '../api'
import { genericError } from '../func'
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
        // {
        //   mbr_type: '理事会员',
        //   mbse_status: '审核中',
        //   appliedTime: '2020-12-12'
        // }
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
      director: this.global.memberInfo.identity === '3',
      // dialogBtn: false
    }
  },
  methods: {
    initGetAppliedForm() {
      let url;
      if(this.director) {
        url = INC_WORK_FORM;
      } else {
        url = COMMON_WORK_FORM;
      }
      ajaxGet(
        url, {},
        this.getAppliedFormResponse, genericError,
      )
    },
    getAppliedFormResponse(res) {
      if(parseInt(res.data.code) === 200) {
        this.global.applyForms = res.data.data;
        let index = 0;
        for(let el of res.data.data) {
          this.appliedFormData.push({
            mbr_type: ['申请人', '普通会员', '高级会员', '理事单位'][this.global.memberInfo.identity],
            mbse_status: ['已注册，未提交申请', '申请正在审核中', '审核驳回，请检查申请信息', '审核通过，等待缴费', '缴费效验中', '缴费效验不通过，请重新确认', '缴费验证通过，已成为正式会员'][parseInt(this.global.formalMemberInfo.mbse_status)],
            index,
          })
          index++;
        }
      }
    },
    editForm(row) {
      const form = this.getApplyForm(this.global.memberInfo.identity-1)
      this.global.editForm = this.global.applyForms[row.index];
      if(!this.director) {
        this.global.editForm.mbr_training_date = [this.global.editForm.mbr_training_date.split('~')[0], this.global.editForm.mbr_training_date.split('~')[1]]
      }
      this.$router.push(`/memberService/apply/${form}`)
    },
    getApplyForm(index) {
      return [
        'normalMemberApplyForm',
        'seniorMemberApplyForm',
        'directorMemberApplyForm'
      ][index]
    },
    chooseApplyType() {
      // 清楚中间量
      this.global.editForm = {}

      const form = this.getApplyForm(this.global.memberInfo.identity-1)
      // this.showApplyBtn = false
      this.$router.push(`/memberService/apply/${form}`)
    }
  },
  created() {
    this.initGetAppliedForm()
  }
}
</script>

<style>
#applied-form {
  width: 100%;
  margin: 0 5%;
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
