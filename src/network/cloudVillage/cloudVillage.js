/**
 * @Author : Lazy
 * @Date : 2021/6/7
 */

import { request } from '../request'

/**
 * 调用此接口 , 可获取视频分类列表
 * @returns {*}
 */
export function getNavBarList() {
  return request({
    url: '/video/category/list'
  })
}

/**
 * 调用此接口 , 传入标签/分类id,可获取到相关的视频,分页参数只能传入offset
 * @param id
 * @returns {*}
 */
export function getVideoListData(id) {
  return request({
    url: '/video/group',
    params: {
      id
    }
  })
}
