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

const PAY_LIST_Inc = `${IP_ADDRESS}/api/financial/inc/` // 获取理事会员缴费数据

const PAY_LIST_Member = `${IP_ADDRESS}/api/financial/mbr/`  // 获取普通/高级会员缴费数据


const PAY_FEE_Inc = id => { // 理事会员缴费，更新订单
  return `${IP_ADDRESS}/api/financial/inc/${id}/`
}

const PAY_FEE_Member = id => { // 理事会员缴费，更新订单
  return `${IP_ADDRESS}/api/financial/mbr/${id}/`
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

const IS_USER = `${IP_ADDRESS}/api/member/find/is_user/`

// 提示信息

const USER_IDENTITY_STATUS = {
  1001: '普通会员',
  1002: '高级会员',
  1003: '理事单位会员'
}

const NORMAL_MEMBER = 1001
const SENIOR_MEMBER = 1002
const COUNCIL_MEMBER = 1003

const MEMBER_APPLY_STATUS = {
  2000: '已注册，未提交申请',
  2001: '申请审核中',
  2002: '申请驳回',
  2003: '审核通过，等待缴费',
  2004: '缴费校验中',
  2005: '缴费效验不通过，请重新确认',
  2006: '已成为正式会员'
}

const ORDER_STATUS = {
  3000: '未缴费',
  3001: '用户已缴费，等待审核',
  3002: '审核不通过',
  3003: '缴费审核通过'
}

const ACTIVITY_APPLY_STATUS = {
  4000: '等待管理员处理申请',
  4001: '申请通过',
  4002: '申请拒绝'
}

export {
    SIGN_UP
  , SIGN_IN
  , AVATAR
  , IS_USER
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
  , PAY_LIST_Inc
  , PAY_LIST_Member
  , PAY_FEE_Inc
  , PAY_FEE_Member
  , PAY_DENY_Inc
  , PAY_PASS_Inc
  , PAY_DENY_Member
  , PAY_PASS_Member
  , ACTIVITY
  , ACTIVITY_APPLY
  , CANCEL_ACTIVITY_APPLY
  , ACTIVITY_FOOTPRINT
  , ACTIVITY_PERCEPTION
  , USER_IDENTITY_STATUS
  , MEMBER_APPLY_STATUS
  , ORDER_STATUS
  , ACTIVITY_APPLY_STATUS
  , NORMAL_MEMBER
  , SENIOR_MEMBER
  , COUNCIL_MEMBER
}
