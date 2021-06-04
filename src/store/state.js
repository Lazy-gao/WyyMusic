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
}
