/**
 * @Author : Lazy
 * @Date : 2021/6/2
 */
import {
  USERPHONE,
  PASSWORD,
  TOKEN,
  COOKIE,
  USERNAME,
  USERId,
  AVATARURL,
  GETVID,
  GETVIDEODETAIL,
  GETVIDEOUrl,
  GETVIDEODETAILINFO,
  GETMVDETAIL,
  GETMVADDRESS,
  GETMVDETAILINFO,
  ISMV
} from './types'
import { setItem } from 'common/storage'

export default {
  // 保存用户电话号码
  [USERPHONE](state, payload) {
    state.phone = payload
  },
  // 保存用户密码
  [PASSWORD](state, payload) {
    state.password = payload
  },
  // 保存token
  [TOKEN](state, payload) {
    state.token = payload
    // 为了防止页面刷新数据丢失，吧数据放在本地存储中，这里放到本地存储中只是为了持久化保存数据
    setItem(TOKEN, payload)
  },
  // 保存cookie
  [COOKIE](state, payload) {
    state.cookie = payload
    setItem(COOKIE, payload)
  },
  // 保存用户名
  [USERNAME](state, payload) {
    state.userName = payload
  },
  // 保存用户id
  [USERId](state, payload) {
    state.userId = payload
  },
  // 保存用户头像
  [AVATARURL](state, payload) {
    state.avatarUrl = payload
  },
  // 保存点击视频的id
  [GETVID](state, payload) {
    state.vid = payload
  },
  // 保存视频详细信息
  [GETVIDEODETAIL](state, payload) {
    state.videoDetail = payload
  },
  // 保存视频播放地址
  [GETVIDEOUrl](state, payload) {
    state.videoUrl = payload
  },
  // 保存视频评论数量等信息
  [GETVIDEODETAILINFO](state, payload) {
    state.videoDetailInfo = payload
  },
  // 保存mv详情
  [GETMVDETAIL](state, payload) {
    state.mvDetail = payload
  },
  // 保存mv播放地址
  [GETMVADDRESS](state, payload) {
    state.mvAddress = payload
  },
  // 保存mv评论数量等信息
  [GETMVDETAILINFO](state, payload) {
    state.mvDetailInfo = payload
  },
  // 保存点击的是不是mv
  [ISMV](state, payload) {
    state.isMv = payload
  }
}
