<template>
  <div id="payList">
    <div>
      <el-table
        :data="this.global.payListData">

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
          prop=""
          width="120"
          fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-money"
              size="small"
              @click="initPay(scope.row)"
              :disabled="'缴费审核通过' === scope.row.status">
              {{ '缴费审核通过' === scope.row.status ? '已缴纳会费' : '缴纳会费' }}
            </el-button>
          </template>
        </el-table-column>

      </el-table>
      <br />

      <el-dialog
        title="付款二维码"
        :visible.sync="payQRCode">
        <div class="QRImg-content">
          <p v-if="payQRCodeObj[index].way === payQRCodeObj[2].way">请向下方银行号码转账，完成缴费</p>
          <p v-if="payQRCodeObj[index].way === payQRCodeObj[2].way" class="band-card">{{ bank_card }}</p>
          <div
            class="QRImg">
            <img :src="payQRCodeObj[index].img" v-if="payQRCodeObj[index].way !== payQRCodeObj[2].way" />
            <span :style="'background:'+payQRCodeObj[index].bgc">{{ payQRCodeObj[index].way }}</span>
          </div>

          <el-button type="primary" @click="hasPay">确认付款</el-button>
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
import { elconfirm, ajaxGet, ajaxPut, elmessage } from '../element-wrapper'
import { genericError } from '../func'
import { PAY_LIST_Inc, PAY_LIST_Member, PAY_FEE_Inc, PAY_FEE_Member, ORDER_STATUS, COUNCIL_MEMBER } from '../api'
export default {
  components: {
    'el-button': Button,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-dialog': Dialog
  },
  data () {
    return {
      bank_card: '1502 2094 0902 4598 792',
      payQRCode: false, // 二维码对话框开关
      payMethodAc: false, // 付款方式对话框开关
      index: 0, // 选择的付款方式索引

      payQRCodeObj: [
        {
          way: '支付宝',
          img: '/img/浑天刷.jpg',
          bgc: '#009fe7'
        },
        {
          way: '微信',
          img: '/img/pay-weixin.png',
          bgc: '#22ab38'
        },
        {
          way: '银行转账',
          img: '/img/浑天刷.jpg',
          bgc: '#f00'
        }
      ],
      payMethods: [
        {
          type: 'primary',
          text: '支付宝'
        },
        {
          type: 'success',
          text: '微信'
        },
        {
          type: 'danger',
          text: '银行转账'
        }
      ],
      order_id: 0,
      // 用户选择的付款方式
      payMethod: ''
    }
  },
  methods: {
    initPay (row) {
      this.order_id = row.id
      this.payMethodAc = true;
      // const method = row.method;
      // this.payQRCodeObj.some((el,index) => {
      //   if(el.way === method) {
      //     this.index = index;
      //     return true;
      //   }
      // })
      // this.payQRCode = true;
    },
    choosePayMethod (index) {
      this.payMethodAc = false;
      this.payQRCode = true;
      // 付款方式
      this.payMethod = this.payMethods[index].text
      this.index = index;
    },
    hasPay () {
      elconfirm(
        '', '是否已付款',
        '', this.confirmPay, genericError
      )
      // 关闭缴费对话框
     this.payQRCode = false;
    },
    confirmPay () {
      let data = {
        status: '3001',
        method: this.payMethod,
        relate_user: this.global.memberInfo.userid
      }
      let url;
      if(parseInt(this.global.memberInfo.identity) === COUNCIL_MEMBER) {
        url = PAY_FEE_Inc
      } else {
        url = PAY_FEE_Member
      }
      ajaxPut(
        url(this.order_id), data,
        this.getPayResponse, genericError,
      )
      // console.log('已付款')
    },
    getPayResponse(res) {
      if(parseInt(res.data.code) === 201) {
        elmessage('成功提交，等待后台审核')
        this.initGetBill()
      }
    },
    initGetBill () {
      let url;
      if(parseInt(this.global.memberInfo.identity) === COUNCIL_MEMBER) {
        url = PAY_LIST_Inc;
      } else {
        url = PAY_LIST_Member;
      }
      ajaxGet(
        url, {},
        this.getBillResponse, genericError
      )
    },
    getBillResponse (res) {
      if (parseInt(res.data.code) === 200) {
        for(let data of res.data.data) {
          data.status = ORDER_STATUS[data.status];
        }
        this.global.payListData = res.data.data;
      }
    }
  },
  created() {
    this.initGetBill();
  }
}
</script>

<style>
#payList .el-dialog {
  width: 80%;
}
.QRImg-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.QRImg-content > * {
  margin-bottom: 20px;
}
.QRImg-content button {
  width: 200px;
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
.band-card {
  font-weight: bold;
  font-size: 2em;
}
</style>
