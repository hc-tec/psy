import {
  MessageBox,
  Message,
  Notification
} from 'element-ui'
import axios from 'axios'
import { postDataFormat, getCookie } from './func'

const _config = params => {
  // 一个小封装，用于 token 验证
  return {
    headers: {
      Authorization: `JWT ${getCookie('token')}`
    },
    params
  }
}

const _config_post = data => {
  // 一个小封装，用于 token 验证
  return {
    headers: {
      Authorization: `JWT ${getCookie('token')}`
    },
    data
  }
}

const elmessage = (msg, info) => {
  Message({
    message: msg,
    type: info
  })
}

const elnotify = (title, msg, type) => {
  Notification({
    title: title,
    message: msg,
    type: type
  })
}

const elconfirm = (title, tip_text, argument, resolve, reject, defaultOption = true, options) => {
  // 使用默认配置
  if (defaultOption) {
    options = {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info'
    }
  }
  MessageBox.confirm(tip_text, title, options)
    .then(() => resolve(...argument))
    .catch(e => reject(e))
}

const elprompt = (title, tip_text, resolve, reject, defaultOption = true, options) => {
  // 使用默认配置
  if (defaultOption) {
    options = {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info'
    }
  }
  MessageBox.prompt(tip_text, title, options)
    .then(({ value }) => resolve(value))
    .catch(e => reject(e))
}

const ajaxGet = (url, params = {}, resolve, reject, args) => {
  args = args || []
  axios.get(url, { params: params })
    .then(response => resolve(response, ...args))
    .catch(e => reject(e))
}

const ajaxPost = (url, data, resolve, reject) => {
  axios.post(url, postDataFormat(data))
    .then(response => resolve(response))
    .catch(e => reject(e))
}

const ajaxDel = (url, params = {}, resolve, reject) => {
  axios.delete(url, { params: params })
    .then(response => resolve(response))
    .catch(e => reject(e))
}

const authAjaxGet = (url, params = {}, resolve, reject, args) => {
  args = args || []
  axios.get(url, _config(params))
    .then(response => resolve(response, ...args))
    .catch(e => reject(e))
}

const authAjaxPost = (url, data, resolve, reject) => {
  console.log((data))
  axios.post(url, _config_post(postDataFormat(data)))
    .then(response => resolve(response))
    .catch(e => reject(e))
}

export {
  elmessage
  , elnotify
  , ajaxGet
  , ajaxPost
  , ajaxDel
  , elconfirm
  , elprompt
  , authAjaxGet
  , authAjaxPost

}
