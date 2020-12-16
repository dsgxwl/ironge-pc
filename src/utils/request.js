import axios from 'axios'
class Http {
  constructor(baseUrl) {
    this.baseURL = process.env.VUE_APP_BASE_API
    this.timeout = 3000
  }
  setInterceptor(instance) {
    instance.interceptors.request.use(config => {
      return config
    })
    instance.interceptors.response.use(
      res => {
        if (res.status == 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      err => {
        return Promise.reject(err)
      },
    )
  }
  mergeOptions(options) {
    return {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options,
    }
  }
  request(options) {
    const instance = axios.create()
    const opts = this.mergeOptions(options)
    this.setInterceptor(instance)
    return instance(opts)
  }
  get(url, config = {}) {
    return this.request({
      method: 'get',
      url: url,
      ...config,
    })
  }
  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data,
    })
  }
}
export default new Http()
