var express = require("express")
var app = express();

// 静态资源托管
app.use(express.static("public"))

// 在服务器上获取数据
const {content,title} = require('./db/db.json')

// 配置路由
// 直接在服务器上给你把页面的内容全部组装好,响应回去的内容就是完全的html内容
// 服务器端渲染
app.get("/index_ssr.html",(req,res)=>{
	var htmlStr = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<title></title>
		</head>
		<body>
			
			<h2>${title}</h2>
			<div>${content}</div>
			
		</body>
	</html>
	`
	res.send(htmlStr)
})

// 配置一个接口
app.get("/get",(req,res)=>{
	res.json({
		content,
		title
	})
})

app.listen(8080,()=>{
	console.log("服务器已经启动在8080");
	console.log("你可以访问http://localhost:8080/index_ssr.html");
	console.log("你可以访问http://localhost:8080/index_csr.html");
})