<template>
  <div id="applyPage">

    <applied-form />

    <div class="apply-btn">

        <el-button
          v-for="(btn,index) in applyBtnInfo"
          :key="btn.text"
          :type="btn.type"
          @click.prevent="(btn.method)(index)">
          {{ btn.text }}
        </el-button>


    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import appliedForm from './appliedForm'
export default {
   components: {
    "el-button": Button,
    "applied-form": appliedForm
   },
  data(){
    return {
      applyBtnInfo: [
        {
          type: 'primary',
          text: '普通会员申请',
          method: this.chooseApplyType,
        },
        {
          type: 'success',
          text: '高级会员申请',
          method: this.chooseApplyType,
        },
        {
          type: 'warning',
          text: '理事单位申请',
          method: this.chooseApplyType,
        }
      ]
    }
  },
  methods: {
    getApplyForm(index) {
      return [
        "normalMemberApplyForm",
        "seniorMemberApplyForm",
        "directorMemberApplyForm"
      ][index]
    },
    chooseApplyType(index) {
      let form = this.getApplyForm(index)
      this.showApplyBtn = false;
      this.$router.push(`/memberService/apply/${form}`)
    }
  },
}
</script>

<style>
#applyPage {
  display: flex;
}
.apply-btn {
  min-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 83vh;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  z-index: 0;
}
#applyPage .apply-btn > * {
  margin: 0;
  margin-bottom: 20px;
}
</style>
