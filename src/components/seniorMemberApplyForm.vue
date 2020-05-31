<template>
  <div class="seniorForm">
    <apply-form
      applyFormTitle="江西省心理咨询师协会高级会员登记表"
       />
  </div>
</template>

<script>
import applyForm from './applyForm'
export default {
  components: {
    'apply-form': applyForm
  },
  data () {
    return {

    }
  },
  methods: {
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
