module.exports = {
  router: {
    // routes 默认的路由表
    // resolve 一个函数，用来配置路由组件的路径
    extendRoutes (routes, resolve) {
		routes.push({
			name: 'abcd',
			path: '/abcd',
			component: resolve(__dirname, 'views/test.vue')
		  })
      console.log(routes)
    }
  }
}