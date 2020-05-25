<template>
    <CollapseTransition>
      <router-view></router-view>
    </CollapseTransition>
</template>

<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
export default {
  components: {
    CollapseTransition
  }
}
</script>

<style>

</style>
