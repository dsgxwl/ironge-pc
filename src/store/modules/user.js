/*
 * @Description:
 * @Author: xiawenlong
 * @Date: 2020-12-16 20:02:19
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-30 14:33:12
 */
import * as type from '../action-types'
import { login, codeLogin } from '@/api/login'
import { Message } from 'element-ui'
import { setCookie } from '@/utils/cookies'
import to from 'await-to'
export default {
  state: {
    token: '',
    userInfo: {},
  },
  mutations: {
    [type.SET_USER_INFO](state, payload) {
      state.userInfo = payload
      state.token = payload.token
      setCookie('userInfo', payload)
      setCookie('myToken', payload.token)
    },
  },
  actions: {
    async [type.LOGIN]({ commit }, formData) {
      const [res, err] = await to(login(formData))
      if (err) return Message.warning(err.msg)
      commit(type.SET_USER_INFO, res.data)
      return res
    },
    async [type.CODE_LOGIN]({ commit }, formData) {
      const [res, err] = await to(codeLogin(formData))
      if (err) return Message.warning(err.msg)
      commit(type.SET_USER_INFO, res.data)
      return res
    },
  },
  modules: {},
}
