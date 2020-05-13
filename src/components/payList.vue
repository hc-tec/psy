<template>
  <div id="payList">
    <div>
      <el-table
        :data="payListData">

        <el-table-column
          label="订单号"
          prop="orderNum">
        </el-table-column>

        <el-table-column
          label="缴费金额"
          prop="fee">
        </el-table-column>

        <el-table-column
          label="缴费方式"
          prop="payWay">
        </el-table-column>

        <el-table-column
          label="会员有效期"
          prop="memberValid">
        </el-table-column>

        <el-table-column
          label="形成订单时间"
          prop="orderMakeTime">
        </el-table-column>

        <el-table-column
          label="订单状态"
          prop="orderCondition">
        </el-table-column>

        <el-table-column
          label="操作"
          prop="">
        </el-table-column>




      </el-table>
      <br />
      <el-button
        type="primary"
        icon="el-icon-money"
        size="small"
        @click="payQRCode = true">
        缴纳会费
      </el-button>

      <el-dialog title="付款二维码" :visible.sync="payQRCode">
        <div class="QRImg-content">
          <div
            class="QRImg"
            v-for="pay in payQRCodeObj"
            :key="pay.way">
            <img :src="pay.img" />
            <span :style="'background:'+pay.bgc">{{ pay.way }}</span>
          </div>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Dialog } from 'element-ui'
export default {
  components: {
    "el-button": Button,
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-dialog": Dialog,
  },
  data(){
    return {
      payQRCode: false,
      payListData: [
        {
          orderNum: 1232,
          fee: 121,
          payWay: '微信支付',
          memberValid: "1年",
          orderMakeTime: "2020-12-12",
          orderCondition: "完成审核",
        }
      ],
      payQRCodeObj: [
        {
          way: "支付宝",
          img: '/img/浑天刷.jpg',
          bgc: '#009fe7',
        },
        {
          way: "微信",
          img: '/img/浑天刷.jpg',
          bgc: '#22ab38',
        },
        {
          way: "xx银行",
          img: '/img/浑天刷.jpg',
          bgc: '#f00',
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
#payList .el-dialog {
  width: 80%;
}
.QRImg-content {
  display: flex;
}
.QRImg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.QRImg > img {
  max-width: 90%;
  max-height: 100%;
  margin-bottom: 10px;
}
.QRImg > span {
  border-radius: 20px;
  color: #fff;
  font-weight: 700;
  font-size: 1.3em;
  line-height: 1.75;
  width: 100px;
  text-align: center;
}
#payList > div:nth-child(1) {
  padding: 20px;
  background-color: #fff;
}

</style>
