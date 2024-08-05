import axios from 'axios'
import NProgress from '@/utils/nprogressConfig'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 20 * 1000, // Timeout
})


// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    NProgress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// axios响应拦截器
http.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default http