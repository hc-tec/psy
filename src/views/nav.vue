<template>
  <div id="control-center">
    <control-nav />
    <user />
    <transition :name="transitionName">
      <router-view class="control-details"></router-view>
    </transition>
  </div>
</template>

<script>
import user from '../components/user'
import controlNav from '../components/nav'
import { getCookie, genericError } from '../func'
import { elmessage, ajaxGet } from '../element-wrapper'
import { COMMON_WORK_FORM, INC_WORK_FORM } from '../api'
export default {
  components: {
    'control-nav': controlNav,
    user
  },
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else if (to.meta.index <= from.meta.index) {
        this.transitionName = 'slide-right'
      }
    }
  },
  methods: {
    initGetMemberInfo() {
      let url;
      if(this.global.memberInfo.identity === 3)
        url = INC_WORK_FORM
      else
        url = COMMON_WORK_FORM
      ajaxGet(
        url, {},
        this.getMemberInfoResponse, genericError
      )
    },
    getMemberInfoResponse(res) {
      if(parseInt(res.data.code) === 200) {
        const flag = res.data.data.length !== 0;
        if(flag)
          this.global.formalMemberInfo = res.data.data[0]
        else
          this.global.formalMemberInfo = [];
      }
    }
  },
  created() {
    if (!getCookie('token')) {
      elmessage('您未登录或登录已过期，即将跳转到登录界面', 'warning')
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    } else {
      this.initGetMemberInfo()
    }
  },
}
</script>

<style>
.control-details {
  margin-left: 240px;
  padding: 20px;
  background-color: #ececec;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .5s;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>
