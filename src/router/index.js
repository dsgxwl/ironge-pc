import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import getTitle from '@/utils/get-title'
import store from '@/store'
import * as type from '@/store/action-types'
import { getCookie } from '@/utils/cookies'
import { getLocal } from '@/utils/local'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = []
const files = require.context('./modules/', false, /\.router.js$/)
files.keys().forEach(key => {
  const file = files(key).default || files(key)
  routes.push(...file)
})
const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = getTitle(to.meta.title)
  NProgress.start()
  if (to.meta.auth && !getCookie('myToken')) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  } else {
    if (JSON.stringify(store.state.user.userInfo) == '{}') {
      const userInfo = getLocal('userInfo', true)
      JSON.stringify(userInfo) !== '{}' && store.commit(`user/${type.SET_USER_INFO}`, userInfo)
    }
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
