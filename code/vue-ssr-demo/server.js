//
// 目标:使用nodejs 运行这段代码,它会开启一个服务器,
//       用户来访问index.html,会采用ssr方式来生成页面
//

const express = require('express');
const app = express()

const Vue = require('vue')

// vue官方提供的实现ssr功能的插件
const renderer = require('vue-server-renderer').createRenderer()

app.get("/index.html",(req,res)=>{
	
	let template= `
	<ul>
		<li v-for="(item,idx) in list" :key="idx">
			<h3>{{item.author}}</h3>
			<div>{{item.content}}</div>
		</li>
	</ul>
	`
	const data = {
		list:[{author:"李白",content:"举杯邀明月"},
		{author:"杜甫",content:"喝酒不开车"},
		{author:"杜甫",content:"喝酒不开车"}]
	}
	const vm = new Vue({
	  template,
	  data
	})

// renderer.renderToString(vue实例)
// vue实例  =====> 对应的html字符串

	renderer.renderToString(vm, (err, html) => {
	  if (err) throw err
	  // 结束请求,返回响应体
	  res.send(html)
	})
})

app.listen(3000,()=>{
	console.log('3000');
})
