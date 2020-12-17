import * as type from '../action-types'
import { login, codeLogin } from '@/api/login'
import { Message } from 'element-ui'
import { setCookie } from '@/utils/cookies'
import { setLocal } from '@/utils/local'
export default {
  state: {
    token: '',
    userInfo: {},
  },
  mutations: {
    [type.SET_USER_INFO](state, payload) {
      state.userInfo = payload
      state.token = payload.token
      setLocal('userInfo', payload)
      setCookie('myToken', payload.token)
    },
  },
  actions: {
    async [type.LOGIN]({ commit }, formData) {
      try {
        const result = await login(formData)
        commit(type.SET_USER_INFO, result.data)
        return result
      } catch ({ msg }) {
        Message.warning(msg)
      }
    },
    async [type.CODE_LOGIN]({ commit }, formData) {
      try {
        const result = await codeLogin(formData)
        commit(type.SET_USER_INFO, result.data)
        return result
      } catch ({ msg }) {
        Message.warning(msg)
      }
    },
  },
  modules: {},
}
