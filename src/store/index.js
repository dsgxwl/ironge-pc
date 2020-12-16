import Vue from 'vue'
import Vuex from 'vuex'
import root from './root/index'
const path = require('path')

Vue.use(Vuex)

const files = require.context('./modules/', false, /\.js$/)
let modules = root.modules || {}
files.keys().forEach(key => {
  const store = files(key).default || files(key)
  const name = path.basename(key, '.js')
  modules[name] = store
  modules[name].namespaced = true
})
root.modules = modules
export default new Vuex.Store(root)
