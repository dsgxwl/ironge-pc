import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import getTitle from '@/utils/getTitle'
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
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
