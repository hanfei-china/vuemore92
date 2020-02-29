// 对axios进行简单的二次封装
import axios from 'axios'

const request = axios.create({
  // 基地址
  baseURL: 'https://conduit.productionready.io'
})
export default request
