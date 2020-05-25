<template>
  <div id="payList">
    <div>
      <el-table
        :data="payListData">

        <el-table-column
          label="订单号"
          prop="oid">
        </el-table-column>

        <el-table-column
          label="缴费金额"
          prop="price">
        </el-table-column>

        <el-table-column
          label="缴费方式"
          prop="method">
        </el-table-column>

        <el-table-column
          label="会员有效期"
          prop="exp">
        </el-table-column>

        <el-table-column
          label="形成订单时间"
          prop="date">
        </el-table-column>

        <el-table-column
          label="订单状态"
          prop="status">
        </el-table-column>

        <el-table-column
          label="操作"
          prop="">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-money"
              size="small"
              @click="initPay(scope.row)">
              缴纳会费
            </el-button>
          </template>
        </el-table-column>

      </el-table>
      <br />

      <el-dialog
        title="付款二维码"
        :visible.sync="payQRCode"
        :before-close="hasPay">
        <div class="QRImg-content">
          <div
            class="QRImg">
            <img :src="payQRCodeObj[index].img" />
            <span :style="'background:'+payQRCodeObj[index].bgc">{{ payQRCodeObj[index].way }}</span>
          </div>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="payMethodAc">
        <h2 style="text-align: center;margin-bottom: 20px;">请选择您缴费的方式</h2>
        <div class="apply-btn-2">
          <el-button
            v-for="(btn,index) in payMethods"
            :key="btn.text"
            :type="btn.type"
            @click.prevent="choosePayMethod(index)">
            {{ btn.text }}
          </el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Dialog } from 'element-ui'
import { elconfirm, authAjaxGet } from '../element-wrapper'
import { genericError } from '../func'
import { PAY_LIST } from '../api'
export default {
  components: {
    'el-button': Button,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-dialog': Dialog
  },
  data () {
    return {
      payQRCode: false, // 二维码对话框开关
      payMethodAc: false, // 付款方式对话框开关
      index: 0, // 选择的付款方式索引
      payListData: [],
      payQRCodeObj: [
        {
          way: '支付宝',
          img: '/img/浑天刷.jpg',
          bgc: '#009fe7'
        },
        {
          way: '微信',
          img: '/img/浑天刷.jpg',
          bgc: '#22ab38'
        },
        {
          way: 'xx银行',
          img: '/img/浑天刷.jpg',
          bgc: '#f00'
        }
      ],
      payMethods: [
        {
          type: 'primary',
          text: '支付宝支付'
        },
        {
          type: 'success',
          text: '微信支付'
        },
        {
          type: 'danger',
          text: 'xx银行转账'
        }
      ],
      orderID: 0
    }
  },
  methods: {
    initPay (row) {
      this.orderID = row.id
      this.payMethodAc = true
    },
    choosePayMethod (index) {
      this.index = index
      // 付款方式
      const payMethod = this.payMethods[index].text
      this.payMethodAc = false
      this.payQRCode = true
    },
    hasPay (closeDialog) {
      elconfirm(
        '', '是否已付款',
        '', this.confirmPay, genericError
      )
      // 关闭缴费对话框
      closeDialog()
    },
    confirmPay () {
      console.log('已付款')
    },
    initGetBill () {
      authAjaxGet(
        PAY_LIST, {},
        this.getBillResponse, genericError
      )
    },
    getBillResponse (res) {
      if (parseInt(res.data.code) === 200) {
        this.payListData = res.data.data
      }
    }
  },
  mounted () {
    this.initGetBill()
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
  max-width: 60%;
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
.apply-btn-2 {
  display: flex;
  justify-content: center;
}
</style>
