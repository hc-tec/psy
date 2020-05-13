<template>
  <div id="control-home">
    <p class="member-info">会员信息</p>
    <el-table
      border
      :data="memberInfo">
      <el-table-column
        v-for="(v,k) in memberInfo[0]"
        :key="k"
        :prop="k"
        :label="fields[k]">

      </el-table-column>
    </el-table>
    <p class="member-info">说明</p>
  </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
export default {
  components: {
    "el-table": Table,
    "el-table-column": TableColumn,
  },
  data(){
    return {
      memberInfo:[
        {
          type: '申请人',
          condition: '已注册，未提交申请',
          code: '129358958923',
          validTime: '2020-12-12~2021-12-12',
          payCondition: '已付款',
        }
      ],
      fields: {
        type: '会员类型',
        condition: '状态',
        code: '会员编码',
        validTime: '有效期',
        payCondition: '缴费情况',
      }
    }
  }
}
</script>

<style>
#control-home > * {
  margin-bottom: 10px;
}
.member-info {
  margin-left: 20px;
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
