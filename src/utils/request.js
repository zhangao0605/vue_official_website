import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://' + window.location.host+'/PublicChainBrowser/',
  // baseURL: 'http://192.168.1.108:8500/PublicChainBrowser/',
  // baseURL: 'http://public.thinkey.xyz'+'/PublicChainBrowser/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 200000 // 请求超时时间
})
//
// // // request拦截器
// service.interceptors.request.use(
//   config => {
//     let token = 'Bearer ' + getToken()
//     config.headers['content-type'] = 'application/json; charset=utf-8'
//     if (store.getters.token) {
//       config.headers['Authorization'] = token
//     }
//     return config
//   },
//   error => {
//     console.log(error)
//     Promise.reject(error)
//   }
// )

// response 拦截器
/**
 * 下面的注释为通过在response里，自定义code来标示请求状态
 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
 * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
 * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.data.code === 200 ) {
      return response.data
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    let msg = ''
    if (error == 'Error: timeout of 200000ms exceeded') {
      msg = '无效请求！请求超时！'
    } else {
      msg = error.message
    }
    Message({
      message: msg,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
