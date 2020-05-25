<template>
  <div id="register">
    <img :src="logo" />
    <regis class="register"></regis>
  </div>
</template>

<script>
import regis from '../components/register'
export default {
  components: {
    regis
  },
  data () {
    return {
      logo: this.global.logo
    }
  }
}
</script>

<style>
#register {
  margin: 40px auto;
  width: 1100px;
}
</style>
