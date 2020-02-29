// 对文章操作进行封装
// 引入 request

// import request from '@/utils/request'
import { request } from '@/plugins/request'
export const getArticles = () => {
  return request({
    method: 'get',
    url: 'api/articles'
  })
}

// 添加文章
export const addArticle = (data) => {
  return request({
    method: 'POST',
    url: 'api/articles',
    data
  })
}

// 获取文章详情
// slug 文章编号
export const getArticle = (slug) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}
