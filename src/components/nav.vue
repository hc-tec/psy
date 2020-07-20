<template>
  <nav id="control-nav">
    <div class="menu-logo">
      <img src="/img/logo.png" height="100%" width="60%" />
    </div>

    <el-menu
      id="control-menu"
      :router="true"
      default-active="/memberService/home">

      <el-menu-item
        v-for="item in menuItems"
        :key="item.title"
        :index="item.index">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>

      <el-submenu
        index="/memberService/memberActivity">

        <template slot="title">
          <i class="el-icon-s-data"></i>会员成长
        </template>

        <el-menu-item
          v-for="item in submenuItems"
          :key="item.title"
          :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>

  </nav>
</template>

<script>
import { Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
export default {
  components: {
    'el-submenu': Submenu,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-menu-item-group': MenuItemGroup
  },
  data () {
    return {
      menuItems: [
        {
          index: '/memberService/home',
          icon: 'el-icon-menu',
          title: '首页'
        },
        {
          index: '/memberService/apply/chooseApplyForm',
          icon: 'el-icon-edit-outline',
          title: '会员申请'
        },
        {
          index: '/memberService/payList',
          icon: 'el-icon-money',
          title: '在线缴费'
        },
        {
          index: '/memberService/certificate',
          icon: 'el-icon-document',
          title: '证书领取'
        }
      ],
      submenuItems: [
        {
          index: '/memberService/memberActivity/activityApply',
          icon: 'el-icon-sell',
          title: '活动申请'
        },
        {
          index: '/memberService/memberActivity/activityFootprint',
          icon: 'el-icon-s-order',
          title: '活动足迹'
        }

      ]
    }
  }
}
</script>

<style>
#control-nav {
  width: 219px;
  height: 100vh;
  position: fixed;
  padding: 10px;
  background-color: #409EFF;
}
#control-menu {
  margin-top: 10px;
}
.menu-logo {
  width: 219px;
  height: 130px;
  line-height: 65px;
  text-align: center;
  border-bottom: 1px dashed #fff;
}
</style>
