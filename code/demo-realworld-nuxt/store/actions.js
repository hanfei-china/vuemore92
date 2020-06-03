//  process.server  是nuxt.js提供的，用来判断是不是在服务器端
const cookieparser = process.server ? require('cookieparser') : undefined
export default {
  // 是nuxtjs中额外提供的api,专门用来在服务器渲染来填充vuex数据容器的。
  // 取取浏览器传过来的cookie
  nuxtServerInit ({ commit }, { req }) {
    console.log('.................nuxtServerInit')
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      console.log(parsed)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}
