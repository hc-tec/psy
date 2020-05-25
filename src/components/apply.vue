<template>
  <div id="member-apply">

    <CollapseTransition>
      <router-view></router-view>
    </CollapseTransition>
  </div>
</template>

<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default {
  components: {
    CollapseTransition
  },
  data () {
    return {

    }
  },
  methods: {
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

</style>
