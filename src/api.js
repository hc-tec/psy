// http://148.70.204.53:3001
const IP_ADDRESS = 'http://148.70.204.53:3001' // 服务器 IP 地址

const SIGN_IN = `${IP_ADDRESS}/signin/` // 账号密码登录

const SIGN_UP = `${IP_ADDRESS}/api/user/signup/` // 注册

const USER_IDENTIFY = `${IP_ADDRESS}/api/member/mbr/is_user/`  // 检测是否为会员

const USER_INFO_MODIFY = `${IP_ADDRESS}/api/user/updateUser/` // 用户信息修改 -- 用户名、密码、手机号

const AVATAR = id => {  // 提交工单时上传的照片
  return `${IP_ADDRESS}/api/member/img/${id}/uploadImg/`;
}

const COMMON_WORK_FORM = `${IP_ADDRESS}/api/member/mbr/` // GET 通过 token 识别用户获取普通会员工单信息，POST 提交工单数据

const APPLY_COMMON_WORK_FORM_MODIFY = id => { // 修改对应 id 的普通会员工单
  return `${IP_ADDRESS}/api/member/mbr/${id}/update/`
}

const INC_WORK_FORM = `${IP_ADDRESS}/api/member/inc/` // GET 通过 token 识别用户获取理事会员工单信息，POST 提交工单数据

const APPLY_ICN_WORK_FORM_MODIFY = id => { // 修改对应 id 的理事会员工单
  return `${IP_ADDRESS}/api/member/inc/${id}/`
}

const APPLY_FORM_DELETE = id => { // 删除对应 id 的工单
  return `${IP_ADDRESS}/api/member/${id}/delete/`
}

const APPLY_FORM_DENY_Inc = id => {
  return `${IP_ADDRESS}/api/member/inc/${id}/IncJudgeDeny`;
}

const APPLY_FORM_PASS_Inc = id => {
  return `${IP_ADDRESS}/api/member/inc/${id}/IncJudgePass`;
}

const APPLY_FORM_DENY_Member = id => {
  return `${IP_ADDRESS}/api/member/mbr/${id}/MbrJudgeDeny`;
}

const APPLY_FORM_PASS_Member = id => {
  return `${IP_ADDRESS}/api/member/mbr/${id}/MbrJudgePass`;
}

const APPLY_FORM_EDIT = id => {
  return `${IP_ADDRESS}/api/member/mbr/${id}/update/`
}

const PAY_LIST = `${IP_ADDRESS}/api/financial/` // 获取缴费数据

const PAY_FEE = id => { // 缴费，更新订单
  return `${IP_ADDRESS}/api/financial/${id}/`
}

const PAY_DENY_Inc = id => {  // 付款审核否决-理事会员
  return `${IP_ADDRESS}/api/financial/${id}/IncJudgeDeny/`;
}

const PAY_PASS_Inc = id => {  // 付款审核通过-理事会员
  return `${IP_ADDRESS}/api/financial/${id}/IncJudgePass/`;
}

const PAY_DENY_Member = id => {  // 付款审核否决-普通会员
  return `${IP_ADDRESS}/api/financial/${id}/IncJudgeDeny/`;
}

const PAY_PASS_Member = id => {  // 付款审核通过-普通会员
  return `${IP_ADDRESS}/api/financial/${id}/IncJudgePass/`;
}

const ACTIVITY = `${IP_ADDRESS}/api/record/act/` // 可申请的活动数据

const ACTIVITY_APPLY = `${IP_ADDRESS}/api/record/aud/` // GET 获取申请活动结果，POST 新建申请

const CANCEL_ACTIVITY_APPLY = id => { // 取消活动申请
  return `${IP_ADDRESS}/api/record/aud/${id}/delete/`
}

const ACTIVITY_FOOTPRINT = `${IP_ADDRESS}/api/record/dir/` // 已完成的活动

const ACTIVITY_PERCEPTION = id => { // 提交活动感悟
  return `${IP_ADDRESS}/api/record/dir/${id}/`
}

export {
    SIGN_UP
  , SIGN_IN
  , AVATAR
  , USER_IDENTIFY
  , USER_INFO_MODIFY
  , COMMON_WORK_FORM
  , APPLY_COMMON_WORK_FORM_MODIFY
  , INC_WORK_FORM
  , APPLY_ICN_WORK_FORM_MODIFY
  , APPLY_FORM_DELETE
  , APPLY_FORM_DENY_Inc
  , APPLY_FORM_PASS_Inc
  , APPLY_FORM_DENY_Member
  , APPLY_FORM_PASS_Member
  , APPLY_FORM_EDIT
  , PAY_LIST
  , PAY_FEE
  , PAY_DENY_Inc
  , PAY_PASS_Inc
  , PAY_DENY_Member
  , PAY_PASS_Member
  , ACTIVITY
  , ACTIVITY_APPLY
  , CANCEL_ACTIVITY_APPLY
  , ACTIVITY_FOOTPRINT
  , ACTIVITY_PERCEPTION
}
