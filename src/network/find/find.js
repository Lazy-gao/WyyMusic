/**
 * @Author : Lazy
 * @Date : 2021/6/3
 */

import { request } from '../request'

/**
 * 调用此接口 , 可获取APP首页信息
 * @returns {*}
 */
export function getFindData(cursor) {
  return request({
    url: '/homepage/block/page',
    params: {
      cursor,
    },
  })
}

/**
 * 调用此接口 , 可获取APP首页圆形图标入口列表
 * @returns {AxiosPromise}
 */
export function roundNavBar() {
  return request({
    url: '/homepage/dragon/ball',
  })
}
