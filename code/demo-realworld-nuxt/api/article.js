// 对文章操作进行封装
// 引入 request

import request from '@/utils/request'
export const getArticles = () => {
  return request({
    method: 'get',
    url: 'api/articles'
  })
}
