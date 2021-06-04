/**
 * @Author : Lazy
 * @Date : 2021/6/2
 */
import { USERPHONE, PASSWORD, TOKEN, COOKIE, USERNAME, USERId, AVATARURL } from './types'
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
}
