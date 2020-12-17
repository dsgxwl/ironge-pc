import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

const productionDomain = '.i-ronge.com'

export const setCookie = (key, value) => {
  console.info('cookie--set--环境', process.env.HOST)
  var domain = process.env.NODE_ENV === 'production' ? productionDomain : ''
  // key = process.env.HOST + '-' + key
  key = productionDomain + '-' + key
  Vue.$cookies.set(key, value, '', '/', domain)
}

export const getCookie = key => {
  // key = process.env.HOST + '-' + key
  key = productionDomain + '-' + key
  return Vue.$cookies.get(key)
}

export const removeCookie = key => {
  console.info('cookie--set--环境', process.env.HOST)
  var domain = process.env.NODE_ENV === 'production' ? productionDomain : ''
  // key = process.env.HOST + '-' + key
  key = productionDomain + '-' + key
  Vue.$cookies.remove(key, null, domain)
}
