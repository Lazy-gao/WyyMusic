import axios from 'axios'
import store from '../store'
import router from '../router'
import { Toast } from 'vant'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    withCredentials: true
  })
  // post请求头
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  /**
   * 请求拦截器
   * 每次请求前，如果存在token则在请求头中携带token
   */
  instance.interceptors.request.use(
    config => {
      // 登录流程控制中，根据本地是否存在token判断用户的登录情况
      // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
      // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
      // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
      // const { cookie } = store.state
      // if (cookie) {
      //   config.headers.cookies = cookie
      // }
      // const { token } = store.state
      // if (token) {
      //   config.headers.authorization = token
      // }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  /**
   * 响应拦截器
   */
  instance.interceptors.response.use(
    // 请求成功
    res => {
      if (res.status === 200) {
        return res.data
      } else {
        return Promise.reject(res)
      }
    },
    // 请求失败
    error => {
      const { response } = error
      if (response) {
        errorHandle(response.status, response.data.message)
        //请求已发出，但是状态不在2xx范围内
        return Promise.reject(response)
      } else {
        // 处理断网请求
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        if (!window.navigator.onLine) {
          store.commit('changeNetwork', false)
        } else {
          return Promise.reject(error)
        }
      }
    }
  )
  return instance(config)
}

/**
 * 提示函数
 * 禁止点击蒙版，显示一秒后关闭
 */
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

/**
 * 跳转登录页
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param status
 * @param other
 */
const errorHandle = (status, other) => {
  switch (status) {
    case 401: // 未登录，跳转登录页
      toLogin()
      break
    case 403: //token过期，清除token，跳转登录页
      tip('登录过期，请重新登录')
      localStorage.removeItem('Cookie')
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}
