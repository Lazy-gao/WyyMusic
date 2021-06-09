/**
 * @Author : Lazy
 * @Date : 2021/6/2
 */
import { getItem } from 'common/storage'
import { TOKEN, COOKIE } from './types'

export default {
  phone: '', // 用户电话号码
  password: '', // 用户密码
  token: getItem(TOKEN),
  cookie: getItem(COOKIE),
  userName: '', // 用户名
  userId: '', // 用户id
  avatarUrl: '', // 用户头像
  vid: '', // 点击要播放视频的id
  videoDetail: {}, // 要播放的视频的详细信息
  videoUrl: [], // 要播放的视频的播放地址
  videoDetailInfo: {}, // 要播放的视频的评论等信息
  mvDetail: {}, // 要播放的MV的详细信息
  mvAddress: [], // 要播放的MV的播放地址
  mvDetailInfo: {}, // 要播放的MV的评论等信息
  isMv: false // 是否是mv
}
