<template>
  <table class="two-column-table" cellspacing="0">
    <tr>
      <th colspan="2">{{ tableData.head }}</th>
    </tr>
    <tr v-for="(val, key) in tableData.body" :key="key">
      <td>{{ key }}</td>
      <td>{{ val }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    tableData: Object
  }
  // tableData: {
  //   head: '',
  //   body: {
  //     "活动名称": "xxx"
  //   }
  // }
}
</script>

<style>
.two-column-table {
  width: 100%;
  margin-bottom: 20px;
}
.two-column-table th {
  font-size: 1.4em;
  color: #409EFF;
  text-align: left;
  position: relative;
}
.two-column-table th::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  background: #409EFF;
}
.two-column-table > tr {
  line-height: 3;
}
.two-column-table > tr:nth-child(1) {
  box-shadow: none;
}
.two-column-table > tr > td {
  padding-left: 10px;
  border-bottom: 1px solid hsla(0,0%,0%,0.12);
}
.two-column-table > tr > td:nth-child(1) {
  font-weight: bold;
  width: 50%;
}
.two-column-table > tr > td:nth-child(2) {
  width: 50%;
  word-break: break-all;
}
</style>
