/**
 * @Author : Lazy
 * @Date : 2021/6/2
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Dialog } from 'vant'
import store from '../store'

Vue.use(VueRouter)
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Find = () => import('pages/find/Find')
const Login = () => import('components/content/login/Login')
const PhoneLogin = () => import('components/content/login/PhoneLogin')
const Verification = () => import('components/content/login/Verification')
const PasswordLogin = () => import('components/content/login/PasswordLogin')

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      // 标识不登录能不能访问该页面，false为可以，true为不行，必须登录才可以访问
      requiresAuth: false,
    },
  },
  {
    path: '/find',
    component: Find,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/phoneLogin',
    component: PhoneLogin,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/verification',
    component: Verification,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/passwordLogin',
    component: PasswordLogin,
    meta: {
      requiresAuth: false,
    },
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录才能访问页面
  if (to.meta.requiresAuth) {
    // 如果已经登录，直接放行
    if (store.state.cookie) {
      return next()
    }
    // 没有登录。提示用户是否需要登录
    Dialog.confirm({
      title: '访问权限',
      message: '该功能需要登录才能访问，确认登录吗？',
    })
      .then(() => {
        // 确认,跳转到登录页面
        router.replace('/login')
      })
      .catch(() => {
        // 取消
        next(false)
      })
  } else {
    // 不需要登录权限的页面直接放行
    next()
  }
})

export default router
