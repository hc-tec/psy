
const IP_ADDRESS = 'http://148.70.204.53:3001' // 服务器 IP 地址

const SIGN_IN = `${IP_ADDRESS}/signin/` // 账号密码登录

const SIGN_UP = `${IP_ADDRESS}/api/user/signup/` // 注册

const USER_INFO_MODIFY = id => { // 用户信息修改 -- 用户名、密码、手机号
  return `${IP_ADDRESS}/api/user/${id}/updateUser/`
}

const COMMON_WORK_FORM = `${IP_ADDRESS}/api/member/mbr/` // GET 通过 token 识别用户获取普通会员工单信息，POST 提交工单数据

const APPLY_COMMON_WORK_FORM_MODIFY = id => { // 修改对应 id 的普通会员工单
  return `${IP_ADDRESS}/api/member/mbr/${id}/`
}

const INC_WORK_FORM = `${IP_ADDRESS}/api/member/inc/` // GET 通过 token 识别用户获取理事会员工单信息，POST 提交工单数据

const APPLY_ICN_WORK_FORM_MODIFY = id => { // 修改对应 id 的理事会员工单
  return `${IP_ADDRESS}/api/member/inc/${id}/`
}

const APPLY_FORM_DELETE = id => { // 删除对应 id 的工单
  return `${IP_ADDRESS}/api/member/${id}/delete/`
}

const PAY_LIST = `${IP_ADDRESS}/api/financial/` // 获取缴费数据

const PAY_FEE = id => { // 缴费，更新订单
  return `${IP_ADDRESS}/api/financial/${id}/`
}

const ACTIVITY = `${IP_ADDRESS}/api/record/act/` // 可申请的活动数据

const ACTIVITY_APPLY = `${IP_ADDRESS}/api/record/aud/` // GET 获取申请活动结果，POST 新建申请

const CANCEL_ACTIVITY_APPLY = id => { // 取消活动申请
  return `${IP_ADDRESS}/api/record/aud/${id}/delete/`
}

const ACTIVITY_FOOTPRINT = `${IP_ADDRESS}/api/record/dir/` // 已完成的活动

const ACTIVITY_PERCEPTION = id => { // 提交活动感悟
  return `${IP_ADDRESS}/api/record/dir/${id}`
}

export {
  SIGN_UP
  , SIGN_IN
  , USER_INFO_MODIFY
  , COMMON_WORK_FORM
  , APPLY_COMMON_WORK_FORM_MODIFY
  , INC_WORK_FORM
  , APPLY_ICN_WORK_FORM_MODIFY
  , APPLY_FORM_DELETE
  , PAY_LIST
  , PAY_FEE
  , ACTIVITY
  , ACTIVITY_APPLY
  , CANCEL_ACTIVITY_APPLY
  , ACTIVITY_FOOTPRINT
  , ACTIVITY_PERCEPTION
}
