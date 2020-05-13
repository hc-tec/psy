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
export default {
  components: {
    "control-nav": controlNav,
    user,
  },
  data(){
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = "slide-left";
      } else if (to.meta.index <= from.meta.index) {
        this.transitionName = "slide-right";
      }
    },
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
