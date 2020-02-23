内容：

- 介绍一款编辑器
- 了解一种混合开发方式
- 把前面开发的黑马头条打包成一个app

准备工作

- 软件：
  - [hbuilderX](https://www.dcloud.io/hbuilderx.html): 一个强大的编辑器，用来编辑代码。
  - [夜神模拟器](https://www.yeshen.com/)：一个安卓手机模拟器，用来调试代码。
- 硬件：
  - 手机数据线。用来做真机调试，安装打包后的app。

## DCloud-HTML5+介绍-HBuliderX安装和完整示例项目

> DCloud是什么?  HTML5+又是什么?

[DCloun官网](https://www.dcloud.io/index.html)

DCloud面向HTML5行业分别推出了：

- 开发工具**`HBuilder`** 。与vscode类似。

- 手机强化引擎**`5+ Runtime`** : **`5+ Runtime`**是  一个手机强化引擎, 相当于一个**`强化版的webview`**(让浏览器拥有了原生的能力) 拍照/录音/二维码 ...

- 前端框架`mui`。类比element-ui，用来快速搭建页面。
- uni-app。通过系列产品对HTML5的强化支持，使得HTML5能达到原生的功能和体验，同时在发行上更优于原生应用。



## Hbuilder

### 下载并安装编辑器

- HbuilderX 普通版
- [HbuilderX开发版](https://www.dcloud.io/hbuilderx.html)

### 创建mui项目

我们要选择5+App 项目,我们说了要用 mui前端框架,所以选择一个mui项目。

<img src="asset/image-20200222233121934.png" alt="image-20200222233121934" style="zoom:50%;" />

- 普通项目。 普通H5项目, Hbuilder内置了几套模板,作用不大,同学们基本都会自己创建
- uni-app。多端应用,一套代码,复用八端,时下最火的一个跨端框架
- wap2App。wap项目转 App , 原来只运在手机上的wap(无线网络协议,诺基亚,爱立信时代)项目 可转app项目
- **5+ App**。利用DCloud 的 **`5+ Runtime`**来做原生能力提供者的 项目
- 小程序。微信原生小程序的另外一个编辑器,比微信提供的开发者工具好用,但是现在谁还在用原生写小程序呢?
- 快应用 。原生快应用编辑器 , 较为冷门的生态, 目前不太热闹



### 用mui来进行界面设计

使用[mui文档](https://dev.dcloud.net.cn/mui/getting-started/)框架来进行布局。

> 根据文档来学习使用
>
> 键盘快捷键。试试输入`moffcanvas`， `mGrid`

hbuilderx提供了很多简单快速的快捷键,我们简单学习两个即可,在body中输入 **`moffcanvas`**,会给出 mui几套基础界面的提示 我们随便选择一个 **`moffcanvas`**(侧滑导航,主界面,菜单同时移动)



![image-20200222233257459](asset/image-20200222233257459.png)

> 我们经过几步 完成了这样一个页面,**`注意`**,**`我们的目的并不是学习mui`**,而是体验DCloud,这个世界上的前端框架何止几百种,永远是学不完的,开发只会用一种前端UI, 我们通过对于这个示例的学习进而了解 混合开发。
>
> 在招聘市场中，也有关于hbuilder, mui的招聘需求，比较小众。



## 5+项目的使用和测试

我们的界面搭建完毕, 接下来我们要尝试去调用摄像头 和 地图 以及电话，很显然，这属于原生的能力。那么，现在我们的代码中有原生的能力了吗？

答案是：有。

我们创建的项目是 5+ Runtime,  这个项目本身就自带原生能力的， 我们的项目中多了一个文件 **`manifest.json`**   [说明地址](https://ask.dcloud.net.cn/article/94),该文件是一个w3c的webapp配置文件。



HbuilderX 给我们的页面中注入了个全局对象 **`plus`**, 这个plus就是我们的原生能力

我们可以在页面中监听plus初始化完成的事件

```js
document.addEventListener('plusready', function(){
	console.log('原生能力准备好了')
})
```

上述代码在浏览器中是不会执行的，它必须要在真机或者手机模拟器中使用。

### 模拟器测试

app测试成本是很高的（想像一下为了测试一个app，你向老板申请购买市面上所有最新款式手机）。

好吧，去下一个模拟器吧。

#### 下载安装

推荐[夜神模拟器](https://www.yeshen.com/),下图是安装完成之后的效果：

<img src="asset/image-20200220222356758.png" alt="image-20200220222356758" style="zoom:50%;" />

#### 配置端口号

由于它的使用的端口号是62001，所以我们还要改下hbuilder中使用的android端口号。

具体操作如下：

![image-20200220094353313](asset/image-20200220094353313.png)



#### 启动调试

启动模拟器，修改完端口号之后，可能要等一会哈。

然后在运行，运行到手机或者模拟器中就可以找到你的模拟器了。如下图示。

<img src="asset/image-20200220222907322.png" alt="image-20200220222907322" style="zoom:50%;" />

然后，点击菜单即可。

### 真机测试

整体思路是：通过数据线把手机与电脑连接，并在手机上开启开发者模式，开放权限，以方便hbuilder识别手机。

步骤：

1. 开启手机的开发者模式。 一般是在手机版本号上连续点击多次。
2. 启动手动上的usb调试，开放安装，访问等权限。
3.  用数据线连接到电脑，并从充电模式切换文件传输模式。
4. 在hbuilder中，运行->运行到手机或者模拟器，检查是否能识别到手机。

[HBuilder/HBuilderX真机运行、手机运行、真机联调常见问题](http://ask.dcloud.net.cn/article/97)

## 功能开发

* [5+ Runtime的文档 ]([HTML5+ API Reference])

### 拍照功能

目标：

- 点击拍照按钮，执行拍照功能，再把照片展示出来。

步骤：

#### 添加点击事件

给dom添加id.

添加tap事件（不是click事件）

```javascript
document.getElementById("btnCamera").addEventListener("tap",()=>{
   alert(1)

})
```

#### 调用拍照功能

思路：

- 获取摄像头对象，按api要求，调用它的拍照功能。

参考：

- [摄像头](http://www.html5plus.org/doc/zh_cn/camera.html)

- [拍照api](http://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.Camera.captureImage)

参考代码

```javascript
document.getElementById("btnCamera").addEventListener('tap', () => {
    if (plus) {
        var carmera = plus.camera.getCamera(1) // 获取主摄像头对象
        carmera.captureImage(function(url) {
            // 注意这个地址不能用 需要转化
            // 需要将相对手机路径变成绝对路径
            let absoluteUrl = plus.io.convertLocalFileSystemURL(url)
            // 我们把地址放到一个新的图片上
            let imageBox = document.createElement("div")
            imageBox.className = "image-box"
            let img = document.createElement("img")
            img.src = absoluteUrl
            imageBox.appendChild(img)

            document.getElementById("content").appendChild(imageBox)
        })
    }
})
```



```html
<div class="image-box">
    <img src=""/>
</div>
```

为了让图片更好的居中显示，可以使用如下css辅助代码

```css
.image-box {
    width: 80%;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #2AC845;
    padding: 10px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .1);
}

.image-box img {
    display: block;
    width: 100%;
}
```



### 地图的定位

#### 目标

​	点击按钮之后，显示百度地图信息。

#### 思路

​	调用[地图API]([http://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map.Map(domId,%20styles)](http://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map.Map(domId, styles))地图代码

#### 准备dom结构

```html
<div id="map">
				加载中...
			</div>
```

设置基本的css

```css
#map {
    width: 90%;
    height: 500px;
    margin: 10px auto;
    text-align: center;
    background: #FFFFFF;
}
```

#### 代码

```javascript
document.getElementById("btnLocation").addEventListener("tap",()=>{
    // 地图
    let map = new plus.maps.Map("map");
    map.showUserLocation(true)
    // map.setCenter(new plus.maps.Point(116.635672,40.169419))
    // map.centerAndZoom( new plus.maps.Point(112.926686,30.418633), 21);
})
```

- 反查坐标可以在[这里](http://api.map.baidu.com/lbsapi/getpoint/index.html)

### 打电话

[API文档](https://www.html5plus.org/doc/zh_cn/device.html)

直接上代码

>```js
>// 打电话 
>var takePhone = function () {
>    plus.device.dial('10086')
>}
>```

需要注意的是: **`地图/电话 这两个功能只能在真机上测试哦`**



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title></title>
		<script src="js/mui.min.js"></script>
		<link href="css/mui.min.css" rel="stylesheet" />
		<style type="text/css">
			.image-box {
				width: 80%;
				margin: 20px auto;
				border-radius: 5px;
				border: 1px solid #2AC845;
				padding: 10px;
				box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .1);
			}

			.image-box img {
				display: block;
				width: 100%;
			}
			
			#map {
				width: 90%;
				height: 500px;
				margin: 10px auto;
				/* position: fixed; */
			/* 	top: 0px;
				bottom: 0px;
				line-height: 200px; */
				text-align: center;
				background: #FFFFFF;
			}
		</style>
		<script type="text/javascript" charset="utf-8">
			mui.init();
		</script>

		<script type="text/javascript">
			document.addEventListener('plusready', function() {
				// 5+runtime 初始化完成
				console.log('原生能力已经就绪')
				console.dir(plus)
			})
		</script>
	</head>
	<body>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">标题</h1>
		</header>
		<div class="mui-content" id="content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li id="btnCamera" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-camera"></span>
						<div class="mui-media-body">camera</div>
					</a>
				</li>
				<li id="btnLocation"class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-location"></span>
						<div class="mui-media-body">Location</div>
					</a>
				</li>

				<li id="btnPhone"class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-phone"></span>
						<div class="mui-media-body">Phone</div>
					</a>
				</li>
			</ul>
			<div id="map">
				加载中...
			</div>
			<div class="image-box">
				<img src="">
			</div>

		</div>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-phone"></span>
				<span class="mui-tab-label">电话</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">邮件</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>

		<script type="text/javascript">
			// 拍照
			document.getElementById("btnCamera").addEventListener('tap', () => {
				if (plus) {
					var carmera = plus.camera.getCamera(1) // 获取主摄像头对象
					carmera.captureImage(function(url) {
						// 注意这个地址不能用 需要转化
						// 需要将相对手机路径变成绝对路径
						let absoluteUrl = plus.io.convertLocalFileSystemURL(url)
						// 我们把地址放到一个新的图片上
						let imageBox = document.createElement("div")
						imageBox.className = "image-box"
						let img = document.createElement("img")
						img.src = absoluteUrl
						imageBox.appendChild(img)

						document.getElementById("content").appendChild(imageBox)
					})
				}
			})
		
			document.getElementById("btnPhone").addEventListener("tap",()=>{
				// 打电话 
				plus.device.dial('10086')
			})
			
			document.getElementById("btnLocation").addEventListener("tap",()=>{
				// 地图
				let map = new plus.maps.Map("map");
				map.showUserLocation(true)
				// map.setCenter(new plus.maps.Point(116.635672,40.169419))
				// let em = document.getElementById("map");
				
			})
			
		</script>

	</body>
</html>
```



## 打包5+项目成App

打包方式有两种：

- 本地打包：本地打包**`需要配置`**  安卓以及苹果的开发打包环境  [安卓本地打包说明](https://ask.dcloud.net.cn/article/508)

- 云打包：是把我们的资源提交到DCloud服务器, 由DCloud完成打包，比较简单不需要 环境安装, 我们此次采用云打包方式。

### 原理

把本机上的项目代码 + 基座   ------> app软件 （安卓的.apk 或者 苹果的 .ipa）

### 步骤

- 本地配置mainfest.json文件
  - app图标
  - app启动图
  - 百度地图密钥（麻烦一些）
- 云打包。
- 下载并使用。

#### 配置mainfest.json

操作：配置[mainfest.json](http://ask.dcloud.net.cn/article/94)文件 , 此文件是配置我们app的各种配置,例如 图标,权限,启动屏等。

- 图标

  - 大小：1024*1024
  - 格式：png
  - 使用到的图片会自动拷贝到根目录的unpackage文件夹中。

- 启动图

- [百度地图的密钥](https://ask.dcloud.net.cn/article/29)

  ​	由于我们用到了百度地图，要想正式打包，还要得到百度地图的允许。这个过程要麻烦一些。

  - 登陆[百度地图开放平台](http://lbsyun.baidu.com/) （注册）

  - 创建应用

    <img src="asset/image-20200220174834172.png" alt="image-20200220174834172" style="zoom:50%;" />

  - 填写信息，如下图示。下图中的**包名**和**SHA1**需要在特别设置，在图后有说明。

<img src="asset/image-20200220175206156.png" alt="image-20200220175206156" style="zoom:50%;" />

> 在哪里获取包名？
>
> 在创建5+项目时，就会生成一个包名。两种方式可以看到：
>
> 方式一：打开manifest.json配置，在基础配置上就可以看到。
>
> 方式二：点发布，云打包，在弹出的设置对话框中就可以看到。
>
> 在哪里获取SHA1？
>
> 公共打包的应用可以直接使用:[BB:AC:E2:2F:97:3B:18:02:E7:D6:69:A3:7A:28:EF:D2:3F:A3:68:E7](https://ask.dcloud.net.cn/article/29)



	- 创建百度地图应用完成之后，会给出访问密钥，接下就可以复制这个密钥，然后在hbuilderx中的manifest.json中去填写了。

<img src="asset/image-20200220175653533.png" alt="image-20200220175653533" style="zoom:50%;" />

现在回到项目中的manifest.json中，把刚才得到的密钥填入即可。

<img src="asset/image-20200220174658445.png" alt="image-20200220174658445" style="zoom:50%;" />

到此，manifest.json设置完成，进入下一个环节吧。

#### 打包

发行->云打包->设置

<img src="asset/image-20200220201225009.png" alt="image-20200220201225009" style="zoom:50%;" />

如果没有什么问题，你将会在控制台中看到类似如下的结果：

![image-20200220200850131](asset/image-20200220200850131.png)

这就是云打包成功了。

#### 下载安装包

在给定的上一步中给出的临时地址中下载安装包到本地，

类似如下的图标。<img src="asset/image-20200220201437625.png" alt="image-20200220201437625" style="zoom:50%;" />

然后你可以安装到模拟器上，或者是你自已的手机上。

- 安装到模拟器：直接拖放到模拟器上即可。
- 安装到手机上：先用其它工具（例如：微信的文件传输助手，或者qq都行）传到手机中，再使用手机自带的文件管理工具找到它，再安装。

### 小结

- 关于百度地图。在测试包中可以不设置密钥，但在打正式包中如果不设置百度地图的密钥，则它不会打包maps模块，而导致的结果是不能使用百度地图。

<img src="asset/image-20200220195721191.png" alt="image-20200220195721191" style="zoom:33%;" />

- 如果你对于其它的设置感兴趣，请自行学习官网，这里的不做展开讲解。
- 打包一个完整5+demo项目，整体来感受一下5+的能力。

## 打包现有h5项目

问： 

如果我们已经使用vue技术开发了一个纯h5的web应用，是否可以给它也打包成一个app呢？答案是：可以。

接下来，以前面学习的头条项目为例，来介绍如何打包成app。



在实操之前有两个知识点要回顾一下：

- 要打包项目，就必须要用mainfest.json文件，而h5项目中是没有的。
- 在vue项目中，npm run build会把pulic中的资源打包进入dist目录。

### 步骤

#### 向h5项目中添加manifest.json

由于mainfest.json中的配置项比较复杂，不方便手动编写。可以：

- 方法1：从已有的5+项目中复制出。

- 方法2：新建一个5+项目，并配置图标信息及启动画面信息，再去复制。



最后把得到的manifest.json及unpackage目录全都拷贝到vue项目的public目录下。

#### 在main.js中添加一段代码

H5就是运行在浏览器中的, 只不过运行在 **`5+ Runtime`**这个增强版浏览器里面, 浏览器和 APP的物理按钮并没有进行关联, 也就是 点击手机返回按钮, 浏览器并不会进行后退操作。

上面的理论比较不好理解，下面来一个具体的场景:

用户进入app，屏幕上显示文章列表，用户进一步点开一篇文章，此时会显现出这篇文章的详情内容。问： 如果用户在手机上按下后退键（或者是触屏手机上在屏幕向右滑动一下），我们希望得到的结果是：

- 情况A. 回到文章列表。
- 情况B. 退出这个app。

显然A结果是比较好的效果。

好的，结论来了，如果不加入下面的代码，你就会得到B结果，加完之后，就会得到A效果。

具体来说就是把下面的代码添加到vue项目的main.js中。

```javascript
// 在main.js中添加如下代码  此代码是采用的 5+ Runtime中的plus对象
document.addEventListener('plusready', function () {
  var webview = window.plus.webview.currentWebview()
  window.plus.key.addEventListener('backbutton', function () {
    webview.canBack(function (e) {
      if (e.canBack) {
        webview.back()
      } else {
        // webview.close(); //hide,quit
        // plus.runtime.quit();
        // 首页返回键处理
        // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
        var first = null
        window.plus.key.addEventListener('backbutton', function () {
          // 首次按键，提示‘再按一次退出应用’
          if (!first) {
            first = new Date().getTime()
            setTimeout(function () {
              first = null
            }, 1000)
          } else {
            if (new Date().getTime() - first < 1500) {
              window.plus.runtime.quit()
            }
          }
        }, false)
      }
    })
  })
}) 

```



#### 正常打包vue项目

现在正常打包vue项目。在头条项目的根目录下，运行：

```bash
npm run build
```

如果打包正常，则会自动生成dist目录。

进入到dist目录下，检查一下，可以发现原来在public目录下的unpackage及mainfest.json也拷贝过来了。

此时，可以认为dist目录下的整体个内容就是一个完整的5+项目了。只不是它没有使用5+的api而已。



#### 打包5+项目

启动hbuilder，用它打开dist目录，hbuilder会自动检测它的目录结构，并当成是一个5+项目。接下来，按前面学习的云打包方式云打包即可。



## 附：打包ios

参考：https://blog.csdn.net/qq_34440345/article/details/99711586