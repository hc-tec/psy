import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { index: 1 },
    components: {
      default: () => import(/* webpackChunkName: "login" */ '../views/login')
    }
  },
  {
    path: '/register',
    name: 'register',
    meta: { index: 2 },
    components: {
      default: () => import(/* webpackChunkName: "register" */ '../views/register')
    }
  },
  {
    path: '/success',
    name: 'regis-success',
    meta: { index: 3 },
    components: {
      default: () => import(/* webpackChunkName: "regis_success" */ '../components/regis_success')
    }
  },
  {
    path: '/memberService',
    name: 'service',
    meta: { index: 4 },
    components: {
      default: () => import(/* webpackChunkName: "service" */ '../views/nav')
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { index: 11 },
        components: {
          default: () => import(/* webpackChunkName: "home" */ '../components/home')
        }
      },
      {
        path: 'apply',
        name: 'apply',
        meta: { index: 5 },
        components: {
          default: () => import(/* webpackChunkName: "apply" */ '../components/apply')
        },
        children: [
          {
            path: 'chooseApplyForm',
            name: 'applyBtn',
            meta: { index: 13 },
            components: {
              default: () => import(/* webpackChunkName: "applyBtn" */ '../components/applyBtn')
            }
          },,
          {
            path: 'normalMemberApplyForm',
            name: 'normalMemberApplyForm',
            meta: { index: 14 },
            components: {
              default: () => import(/* webpackChunkName: "normalMemberApplyForm" */ '../components/normalMemberApplyForm')
            }
          },
          {
            path: 'seniorMemberApplyForm',
            name: 'seniorMemberApplyForm',
            meta: { index: 15 },
            components: {
              default: () => import(/* webpackChunkName: "seniorMemberApplyForm" */ '../components/seniorMemberApplyForm')
            }
          },
          {
            path: 'directorMemberApplyForm',
            name: 'directorMemberApplyForm',
            meta: { index: 16 },
            components: {
              default: () => import(/* webpackChunkName: "directorMemberApplyForm" */ '../components/directorMemberApplyForm')
            }
          }
        ]
      },
      {
        path: 'payList',
        name: 'payList',
        meta: { index: 6 },
        components: {
          default: () => import(/* webpackChunkName: "payList" */ '../components/payList')
        }
      },
      {
        path: 'certificate',
        name: 'certificate',
        meta: { index: 7 },
        components: {
          default: () => import(/* webpackChunkName: "certificate" */ '../components/certificate')
        }
      },
      {
        path: 'memberActivity',
        name: 'memberActivity',
        meta: { index: 8 },
        components: {
          default: () => import(/* webpackChunkName: "memberActivity" */ '../views/memberActivity')
        },
        children: [
          {
            path: 'activityApply',
            name: 'activityApply',
            meta: { index: 9 },
            components: {
              default: () => import(/* webpackChunkName: "activityApply" */ '../components/activityApply')
            }
          },
          {
            path: 'activityApply/:id',
            name: 'activityApplyId',
            meta: { index: 30 },
            components: {
              default: () => import(/* webpackChunkName: "activityDetails" */ '../components/activityDetails')
            }
          },
          {
            path: 'activityFootprint',
            name: 'activityFootprint',
            meta: { index: 10 },
            components: {
              default: () => import(/* webpackChunkName: "activityFootprint" */ '../components/activityFootprint')
            }
          }
        ]
      },
      {
        path: 'pawdModify',
        name: 'pawdModify',
        meta: { index: 20 },
        components: {
          default: () => import(/* webpackChunkName: "pawdModify" */ '../components/pawdModify')
        }
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    meta: { index: 100 },
    components: {
      default: () => import(/* webpackChunkName: "search" */ '../components/search')
    }
  },
  {
    path: '*',
    name: '404',
    meta: { index: 12 },
    components: {
      default: () => import(/* webpackChunkName: "login" */ '../views/login')
    }
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
