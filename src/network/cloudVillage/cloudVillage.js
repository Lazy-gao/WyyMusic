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
export function getVideoListData(id, offset) {
  return request({
    url: '/video/group',
    params: {
      id,
      offset
    }
  })
}

/**
 * 调用此接口 , 可获取视频详情
 * @param id
 * @returns {AxiosPromise}
 */
export function getVideoDetail(id) {
  return request({
    url: '/video/detail',
    params: {
      id
    }
  })
}

/**
 * 调用此接口 , 传入视频 id,可获取视频播放地址
 * @param id
 * @returns {AxiosPromise}
 */
export function getVideoPlayAddress(id) {
  return request({
    url: '/video/url',
    params: {
      id
    }
  })
}

/**
 * 调用此接口 , 传入 vid ( 视频id ) , 可获取对应视频点赞转发评论数数据
 * @param vid
 * @returns {AxiosPromise}
 */
export function getVideoDetailInfo(vid) {
  return request({
    url: '/video/detail/info',
    params: {
      vid
    }
  })
}

/**
 * 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 ,
 * mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * @param {*} mvid
 * @returns
 */
export function getMvDetail(mvid) {
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

/**
 * 调用此接口 , 传入 mv id,可获取 mv 播放地址
 * @param {*} id
 * @returns
 */
export function getMvAddress(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

/**
 * 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
 * @param {*} mvid
 * @returns
 */
export function getMvDetailInfo(mvid) {
  return request({
    url: '/mv/detail/info',
    params: {
      mvid
    }
  })
}
