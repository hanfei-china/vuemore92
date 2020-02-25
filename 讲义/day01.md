## github无法访问的一种解决方案

<img src="asset/image-20200223095239880.png" alt="image-20200223095239880" style="zoom:50%;" />

```bash
127.0.0.1       localhost

192.30.253.113  github.com

192.30.252.131  github.com

185.31.16.185 github.global.ssl.fastly.net

74.125.237.1 dl-ssl.google.com

173.194.127.200 groups.google.com

185.31.16.185 github.global.ssl.fastly.net
74.125.128.95 ajax.googleapis.com
```

## app分类

app就是运行在移动设备上的程序；

按开发方式分类：

- 原生开发
- web开发（网页）
- 混合开发



## 原生开发

根据手机的不同操作系统，使用各自不同的编程语言来写程序。

- 安卓
- ios

优点：性能好，各种好。

缺点：

- 费钱
- 用户升级...
- 平台上审核...



## 访问网页时，服务器是如何知道当前用户是pc还是手机？

从客户端浏览器向服务器发请求时，会自动携带请求头，后端是可以收到这个请求头的。

其中有一个头叫：`User-agent`(用户代理)。它保存的字符串就可以用来识别当前的浏览器的信息。

下面这个是pc的。

![image-20200223104326465](asset/image-20200223104326465.png)

下面这个是移动端的

![image-20200223104846447](asset/image-20200223104846447.png)

服务器收到不同的头，会分析，决定是否要跳转到pc，或者是移动端。

如果要跳转，就给302状态码，并设置location响应头，则浏览器会自动跳转。

![image-20200223104956594](asset/image-20200223104956594.png)

![image-20200223105002353](asset/image-20200223105002353.png)

## webApp

就是一个移动端的网站。

优点：

- 经济，省钱。就是做网页。
- 升级更新方便

缺点：

- 功能受限（不能使用原生的api：打电话，监控电池，拍照...）
- 没有固定入口。
  - 通过挂在微信公众号的链接中，可以定下来入口。



## HybridApp 混合模式

在html5页面的之外，包一个原生的壳webView。

好处：

- 因为有原生的壳，就可以去调用原生的api(拍照....)
- 代码是h5的，所以成本比较低

缺点：

- 体现还是不如原生的好。

后面会通过hbuilderx 软件来给大家演示。



## 三种跨平台的开发方式

跨平台：我只写一次代码，就可以生成ios，安卓的app。

技术：

- RN:react native
- weex
- flutter



## 其它开发方式

- 小程序
- 快应用
- 直达号

## 多端开发

目标:写一次代码，运行在不同的**端**（微信小程序，百度小程序，头条小程序.....）

代表：

- taro: JD. 基于react。 
- uni-app: ucloud,基于vue

## 技术取舍

想快，想出结果： 

- uni-app 做跨端，跨平台）应用 （混合）
- react native 做跨平台（ios,安卓）
- flutter做跨平台

业务大了，有钱了：

- 做原生



## hbuilder x 和mui

- hbuilder x:编辑器（不止于编辑器）
- mui: 它是一套移动端ui框架。它与hbuilder无缝配合，有大量快捷键和完备ui文档



## 连接手机模拟器，启动5+plus功能

必须在真机或者是模拟器中才会运行。

```javascript
document.addEventListener('plusready',()=>{
	// plus 对象就是一切原生能力的来源。
    // 它会挂到window对象
})
```



## 调用相机，拍照

只有在真机上（模拟器上）才可以来使用`plus`. plus对象是所有底层api功能的入口。

```javascript
document.getElementById("btnCamera").addEventListener("tap",()=>{
    console.log('tap')
    // 调用相机来拍照
    // 1. 获取摄像头 
    // plus是自动加持的（只要在真机或者是模拟器中运行，就有plus）。
    // plus.camera.getCamera: 是5+提供的系统功能。
    // index: ( Number ) 可选 要获取摄像头的索引值
    // 指定要获取摄像头的索引值，1表示主摄像头，2表示辅摄像头。如果没有设置则使用系统默认主摄像头。
    let camera = plus.camera.getCamera(1);
    console.log(camera)
    // 2. 用摄像头拍照
    camera.captureImage((url)=>{
        // 拍照成功之后，保存之后，这里的url就是照片的地址
        // 这个地址是相对地址，如果要想使用，则需要改成绝对路径。

        // 调用系统方法，来转换路径
        let absoluteUrl = plus.io.convertLocalFileSystemURL(url)

        // 把照片设置到img上。
        document.getElementById("image").src= absoluteUrl
        console.log(url)
    })

})
```



## 显示地图

```javascript

// 地图
document.getElementById("btnLocation").addEventListener("tap",()=>{
    // 把地图展示在 id为map的div中
    // plus.maps.Map是plus提供的功能
    // 格式： plus.maps.Map(div的id号)
    let mapObj = new plus.maps.Map("map")

    // 定位到当前设置所处的位置
    // mapObj.showUserLocation(true)

    // 自行设置地图的中心点
    // mapObj.setCenter(new plus.maps.Point(116.599163,35.553089))
    // 自行设置地图的中心点,设置缩放 21
    mapObj.centerAndZoom( new plus.maps.Point(112.926686,30.418633), 21);

    console.log(mapObj)

})
```

## 打电话

```javascript
// 打电话
document.getElementById("btnPhone").addEventListener("tap",()=>{
    plus.device.dial("10086")
})
```

