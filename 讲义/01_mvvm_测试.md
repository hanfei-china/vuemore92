

## 第1题

### 题目

下面代码会输出什么？

```javascript
var obj = {a:1};
Object.defineProperty(obj,"a",{
    get(){
        return this.a
    }
})
console.log(obj.a)
```

友情请示： 如果在浏览器中运行上面的代码，可能会导致浏览器卡死。慎重。

### 答案

会陷入死循环。因为是上面的Object.definedProperty()给obj对象的a属性添加一个拦截器get()，当访问obj.a时，会执行get()中的代码，而在get()中又再次访问obj.a（this.a也就是obj.a），所以这里会形成死循环。

## 第2题

### 题目 

下面代码中，req,res分别是指什么？

```javascript
http.createServer((req,res)=> {
    res.end('ok')    
})
```



### 答案

req：表示本次请求对象。

res：表示本次响应对象。用它可以来设置响应相关的内容。

## 第3题

### 题目 

下面代码中：

```javascript
http.createServer((req,res)=> {
    res.end('ok')    
})
```

res.end()有什么用处？

### 答案

有两个作用：1.设置响应体的内容是字符串`ok`。 2. 结束本次请求。如果不写res.end()则请求将不会结束。

## 第4题

### 题目

```javascript
http.createServer((req,res)=> {
	let rs = fs.readFileSync('./1.png','utf8')
    res.end(rs)    
})
```

上面代码的目标是返回一张图片给浏览器显示，请问它能成功吗？为什么？

### 答案

不能成功。因为readFileSync的第二个参数设置成了utf8之后，得到的内容是字符串，而读出图片需要的是buffer格式。改正的方式是：去掉'utf8'。



## 第5题

### 题目

如何理解二次请求？

### 答案

如果请求回来的内容是.html，则浏览器会去以网页的格式来显示这个文件内容，此时，如果.html中还引入其它的资源(.css,.png...)就会再次去请求。

## 第6题

### 题目

如果用户在地址栏中输入是：http://localhost:8084/getmsg?a=123，

在后端服务器中：

```
(req,res)=>{
   console.log(req.url)// 这里的值是什么？
}
```

上面的req.url的值是什么？如何获取本次请求的类型？

### 答案

/getmsg?a=123 。 req.method

## 第7题

### 题目

如果用户在地址栏中输入是：http://localhost:8084

在后端服务器中：

```
(req,res)=>{
   console.log(req.url)// 这里的值是什么？
}
```

### 答案

答案是： /  。它表示根。注意，不是空。

## 第8题

### 题目

观察如下代码：

```
(req,res)=>{
   let rs = fs.readFileSync('./1.html')
   res.setHeader("content-type","text/css;charset=utf-8")
   res.end(rs)
}
```

假设1.html中确实是一个标准的html文件，上面代码执行后，在浏览器中能顺利显示这个页面吗？

### 答案

不能。由于这里设置了content-type是 text/css，所以浏览器会把它当作一个css文件来处理：直接把html代码显示在浏览器中，而不会当作一个网页来显示。

## 第9题

### 题目

如何设置响应状态码是404？

### 答案

res.statusCode = 404

## 第10题

### 题目

如下代码中：

```javascript
const url = require('url');
const obj = url.parser('/api/getmsg?a=1&b=2')
```

如何取出 接口的地址？地址是多少？

### 答案

 obj.pathname , /api/getmsg



## 第10题

### 题目

如下代码中：

```javascript
const url = require('url');
const obj = url.parser('/api/getmsg?a=1&b=2',true)
```

如何取出 a,b的值？

### 答案

方法一：直接获取.

obj.query.a , obj.query.b

方法二：解构赋值

let {a,b} = obj.query

## 第12题

### 题目

如下代码中：

```javascript
(req,res)=>{
   let result = {code: 200, data:[1,2,3]}
   res.end(result)
}
```

是否可以达到把对象result返回给客户端的目标？如不能，应该如何改正？

### 答案

不能。因为res.end()的实参只是buffer或者是字符串格式 。

应该改成：

```javascript
var result = let result = {code: 200, data:[1,2,3]}
// 明确告之客户端，这里是json数据。
res.setHeader("content-type","application/json;charset=utf-8")
res.end(JSON.stringify( result) )
```







## 第13题

### 题目

接口与静态资源有相同和不同的地方。

### 答案

相同点：都需要通过url地址来访问，都表示服务器上的资源。

不两点：服务器会读出静态资源的内容返回给客户端；服务器会执行接口对应的代码来返回结果给客户端。



## 第14题

### 题目 

如果要实现一个get类型的，名为test的测试接口，下面的代码有什么不对的地方？

```javascript
http.createServer((req,res)=> {
    if(req.url==='test' && req.method==='get') {
        res.end('ok')
    } else {
        res.end('404')
    }    
})
```



### 答案

if中的条件应该改成`if(req.url==='/test' && req.method==='GET')`

## 第15题

### 题目 

如何实现一个名为abc的get类型接口，让它以json格式返回所传入的参数。

```javascript
http.createServer((req,res)=> {
    if( __ req.method==='get') {
        // 补全代码
    } else {
        res.end('404')
    }   
})
```

### 答案

```javascript
http.createServer((req,res)=> {
    var obj = url.parse(req.url,true)
    if(obj.pathname==="/abc" && req.method==='GET') {
		res.setHeader("content-type","application/json;charset=utf-8")
        res.end(JSON.stringfy(obj.query))
    } else {
        res.end('404')
    }   
})
```

## 第16题

### 题目

post方式传参与get方式传参的区别？

### 答案

get方式只能通过在请求行中以查询字符串的格式传递，由于url地址的长度不可能无限长，所以get方式传参的长度有限。post方式传递的参数在请求体中，所以没有大小的限制。



## 第17题

### 题目

如何获取post方式传递的参数？

### 答案

给req对象监听data,end事件。在data事件中收集当前传递的一段数据，并统一收集起来；在end事件中解析数据，还原成对象格式。

## 第18题

### 题目

如何实现一个名为abc的post类型接口，让它以json格式返回所传入的参数。

```javascript
http.createServer((req,res)=> {
    if( __ req.method==='POST') {
        // 补全代码
    } else {
        res.end('404')
    }   
})
```

### 答案

```javascript
const qs = require("querystring")
http.createServer((req,res)=> {
    if( req.pathname==="/abc" && req.method==='POST') {
        let bodyStr =""
        req.on("data",buf => bodyStr+=buf)
        req.on("end",()=>{
            let obj = qs.parse(bodyStr)
            // 注意res.end()的位置是在回调函数中
            res.setHeader("content-type","application/json;charset=utf-8")
            res.end(JSON.stringify(obj))
        })
    } else {
        res.end('404')
    }   
})
```

## 第19题

### 题目

下面的代码是用来实现一个名为abc的post类型接口，让它以json格式返回所传入的参数。

```javascript
const qs = require("querystring")
http.createServer((req,res)=> {
    if( req.pathname==="/abc" && req.method==='post') {
        let bodyStr =""
        res.on("data",buf => bodyStr+=buf)
        res.on("end",()=>{
            let obj = qs.parse(bodyStr)
            res.setHeader("content-type","application/json;charset=utf-8")
            res.end(JSON.stringify(obj))
        })
    } else {
        res.end('404')
    }
})
```

请指出上面代码中可能存在的错误。

### 答案

1. req.method === `post` 。这里的post应该是大写。
2. res.on应该是req.on