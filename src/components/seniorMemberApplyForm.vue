<template>
  <div class="seniorForm">
    <apply-form
      applyFormTitle="江西省心理咨询师协会高级会员登记表"
      @submitApplyForm="submitApplyForm($event)" />
  </div>
</template>

<script>
import applyForm from './applyForm'
import { COMMON_WORK_FORM, APPLY_COMMON_WORK_FORM_MODIFY } from '../api'
import { ajaxPost, elmessage, ajaxPatch } from '../element-wrapper'
import { genericError } from '../func'
export default {
  components: {
    'apply-form': applyForm
  },
  data () {
    return {

    }
  },
  methods: {
    submitApplyForm(applyFormData) {
      console.log(applyFormData)
      applyFormData.mbse_user = this.global.memberInfo.userid;

      if(typeof this.global.editForm.id === 'number') {
        ajaxPatch(
          APPLY_COMMON_WORK_FORM_MODIFY(this.global.memberInfo.userid), applyFormData,
          this.getApplyFormResponse, genericError
        )
      }
      else {
        ajaxPost(
          COMMON_WORK_FORM, applyFormData,
          this.getApplyFormResponse, genericError
        )
      }
    },
    getApplyFormResponse(res) {
      if(parseInt(res.data.code) === 201) {
        elmessage('提交成功', 'success');
        this.$router.push('/memberService/apply/chooseApplyForm/');
      }
      console.log(res)
    }
  }
}
</script>

<style>
.seniorForm {
  background-color: #f7f7f8;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

</style>
