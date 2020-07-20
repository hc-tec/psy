<template>
  <div id="control-center">
    <control-nav />
    <user />
    <transition :name="transitionName">
      <router-view class="control-details"></router-view>
    </transition>
    <footage style="margin-left: 240px;" />
  </div>
</template>

<script>
import user from '../components/user'
import controlNav from '../components/nav'
import footage from '../components/footage'
import { getCookie, genericError } from '../func'
import { elmessage, ajaxGet } from '../element-wrapper'
import { COMMON_WORK_FORM, INC_WORK_FORM, PAY_LIST_Inc, PAY_LIST_Member, COUNCIL_MEMBER, ORDER_STATUS } from '../api'
export default {
  components: {
    'control-nav': controlNav,
    user,
    footage
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
      if(parseInt(this.global.memberInfo.identity) === COUNCIL_MEMBER)
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
        this.global.applyForms = res.data.data;
        if(flag)
          this.global.formalMemberInfo = res.data.data[0]
        else
          this.global.formalMemberInfo = [];
      }
    },
    initGetBill () {
      let url;
      if(parseInt(this.global.memberInfo.identity) === COUNCIL_MEMBER) {
        url = PAY_LIST_Inc;
      } else {
        url = PAY_LIST_Member;
      }
      ajaxGet(
        url, {},
        this.getBillResponse, genericError
      )
    },
    getBillResponse (res) {
      if (parseInt(res.data.code) === 200) {
        for(let data of res.data.data) {
          data.status = ORDER_STATUS[data.status];
        }
        this.global.payListData = res.data.data;
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
      this.initGetMemberInfo();
      this.initGetBill();
    }
  },
  mounted() {
    if(!this.global.memberInfo || !this.global.memberInfo.userid) {
      this.$router.push('/login')
    }
  }
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
