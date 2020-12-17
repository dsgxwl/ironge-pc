import config from './config/login'
import axios from '@/utils/request'
export const login = params => axios.post(config.login, params) // 登录
export const codeLogin = params => axios.post(config.codeLogin, params) // 验证码登录
export const getVerifyCode = params => axios.post(config.getVerifyCode, params) // 获取验证码
export const register = params => axios.post(config.register, params) // 获取验证码
export const resetpassword = params => axios.post(config.resetpassword, params) // 忘记密码
export const getVerifyCodeForResetPas = params =>
  axios.post(config.getVerifyCodeForResetPas, params) // 忘记密码获取验证码
