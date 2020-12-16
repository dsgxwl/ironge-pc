import config from './config/public'
import axios from '@/utils/request'
export const login = () => axios.post(config.login)
