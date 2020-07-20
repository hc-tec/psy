<template>
  <div id="search">
    <img :src="this.global.logo" style="position:absolute;top: 50px;left:150px" width="150" />
    <h2>会员查询</h2>
    <search />
  </div>
</template>

<script>
import search from '../components/search'
export default {
  components: {
    search,
  }
}
</script>

<style>
#search {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  margin-top: 200px;
}
#search > h2 {
  color: #409EFF;
  position: relative;
}
#search > h2::before {
  position: absolute;
  content: '';
  bottom: -5px;
  width: 20px;
  height: 4px;
  border-radius: 10%;
  background-color: #409EFF;
}
#search > * {
  margin-bottom: 20px;
}
.search {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.search button {
  width: 300px;
}
</style>
