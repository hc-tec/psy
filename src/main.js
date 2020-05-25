import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Element-UI 组件 css 文件
import 'element-ui/lib/theme-chalk/index.css'
// 全局变量
import global from './global'
Vue.prototype.global = global

Vue.config.productionTip = false

// 每次更换页面，视图自动滚动到顶部
router.afterEach(() => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
