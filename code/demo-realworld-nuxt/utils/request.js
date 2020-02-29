// 对axios进行简单的二次封装
import axios from 'axios'

// 我们不能直接在utils/request.js中获取vuex的值
// 因为在nuxt使用vuex时，store是通过函数返回的！！

const request = axios.create({
  // 基地址
  baseURL: 'https://conduit.productionready.io'
})

// 设置请求拦截器
request.interceptors.request.use((config) => {
  // Do something before request is sent
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Token ${user.token}`
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})
export default request
