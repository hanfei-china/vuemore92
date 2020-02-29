
// 对axios进行简单的二次封装
import axios from 'axios'

export const request = axios.create({
  // 基地址
  baseURL: 'https://conduit.productionready.io'
})

// 插件中，第一个参数中就包含了store信息
export default (context) => {
  const { store } = context
  console.log('.....................test.js插件')

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
}
