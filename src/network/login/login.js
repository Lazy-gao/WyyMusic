/**
 * @Author : Lazy
 * @Date : 2021/6/3
 */
import { request } from '../request'

/**
 * 调用此接口 ,传入手机号码, 可发送验证码
 * @param phone 手机号码
 * 可选参数 : ctcode: 国家区号,默认86即中国
 * @returns {AxiosPromise}
 */
export function getVerifyCode(phone) {
  return request({
    url: '/captcha/sent',
    params: {
      phone,
    },
  })
}

/**
 * 调用此接口 ,传入手机号码和验证码, 可校验验证码是否正确
 * 可选参数 : ctcode: 国家区号,默认86即中国
 * @param phone
 * @param verify
 * @returns {AxiosPromise}
 */
export function verifyCode(phone, verify) {
  return request({
    url: '/captcha/verify',
    params: {
      phone,
      verify,
    },
  })
}

/**
 * 手机登录
 * @param phone 手机号码
 * @param password 密码
 * @returns {*}
 * @constructor
 */
export function phoneLogin(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password,
    },
  })
}

/**
 * 调用此接口 ,可检测手机号码是否已注册
 * @param phone
 * @returns {AxiosPromise}
 */
export function verifyPhone(phone) {
  return request({
    url: '/cellphone/existence/check',
    params: {
      phone,
    },
  })
}
