<template>
  <div id="user-operation">
    <div>
      <i class="el-icon-user"></i>
      <span> 欢迎会员：{{ this.global.memberInfo.name }}</span>
    </div>
    <div
      @click="modifyPawd">
      <i class="el-icon-lock"></i>
      <span> 修改密码</span>
    </div>
    <div>
      <i class="el-icon-switch-button"></i>
      <span> 退出系统</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modifyPawd(){
      this.$router.push('/memberService/pawdModify')
    }
  }
}
</script>

<style>
#user-operation {
  margin-left: 219px;
  padding-left: 600px;
  display: flex;
  height: 69px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  line-height: 69px;
}
#user-operation > div {
  margin-left: 30px;
}
#user-operation div:nth-child(2),
#user-operation div:nth-child(3) {
  cursor: pointer;
}
#user-operation div:nth-child(2):hover {
  color: #409EFF;
}
#user-operation div:nth-child(3):hover {
  color: #F56C6C;
}
</style>
