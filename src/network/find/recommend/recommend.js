/**
 * @Author : Lazy
 * @Date : 2021/6/9
 */
import { request } from '../../request'

/**
 * 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
 * @returns {AxiosPromise}
 */
export function getRecommendList() {
  return request({
    url: '/recommend/songs'
  })
}
