// 对用户操作进行封装
// import request from '@/utils/request'
import { request } from '@/plugins/request'

// 用户注册功能
export const register = (data) => {
  return request({
    url: 'api/users',
    method: 'POST',
    data
  })
}

// 用户登陆
export const login = (data) => {
  return request({
    url: 'api/users/login',
    method: 'POST',
    data
  })
}
