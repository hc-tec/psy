const postDataFormat = data => {
  let dataString = ''
  const keys = Object.keys(data)
  const len = keys.length
  keys.forEach(el => {
    if (el != keys[len - 1]) {
      dataString += `${el}=${data[el]}&`
    } else {
      dataString += `${el}=${data[el]}`
    }
  })
  return dataString
}

// 字典合并
const mergeDict = (dict_1, dict_2) => {
  const mergeList = [...Object.keys(dict_1), ...Object.keys(dict_2)]
  const mergeObject = {}
  for (const el of mergeList) {
    mergeObject[el] = dict_1[el] || dict_2[el]
  }
  return mergeObject
}

// 判断一个字典所有属性是否为空, 贪婪
const validValue = obj => {
  let valid = true
  try {
    Object.keys(obj).forEach(el => {
      if (obj[el] === '') {
        valid = false
        throw new Error('存在字段为空')
      }
    })
  } catch (e) {
    console.log(e)
  }
  return valid
}

const genericError = e => {
  console.error(e)
}

const getCookie = name => {
  var arr; var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) { return unescape(arr[2]) } else { return null }
}

const setCookie = (name, value, time) => {
  const exp = new Date()
  exp.setTime(exp.getTime() + time)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
}

const delCookie = name => {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1000 * 60 * 60 * 24 * 30)
  const cval = getCookie(name)
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/' }
}

export {
  postDataFormat, mergeDict, genericError,
  getCookie, setCookie, delCookie, validValue
}
