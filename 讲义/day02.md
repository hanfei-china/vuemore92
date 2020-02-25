## 反馈的问题

1.github打不开。联通的网络打不开。解决方法：

- 找移动网络的手机开热点
- 去修改hosts文件。

2. 如何去上传本地仓库到远程仓库？

   - 你的**本地仓库就是从远程clone下来的**，并且你有权限去push（如果你是在网上clone的别人的仓库，那你就不能随意去修改仓库代码，如果修改了，则再次git pull 可能会导致失败）。

   - 你的本地仓库从来没有与某个远程仓库建立关联（从来没有上过github）

     - 在github上创建一个同名的空仓库。

       ```bash
       git remote add origin https://github.com/fanyoufu/abcd.git
       git push -u origin master
       ```

3.  hbuilder连接不上手机

   多试几次

## 打包app

目标：把自已写的h5页面 + hbuilder提供的基座 =======> .apk

过程：

- 配置manifest.json。
  - 地图要申请密钥。
- 云打包。
- apk传到手机中，安装.



## 如何打包已有的h5项目

- 去配置manifest.json文件。
  - 在hbuilder中配置好了，再拷贝到vue项目的public目录下
- vue正常打包，所有的文件会在dist目录下
- 在hbuilder中打开dist目录，由于它有manifest.json文件，则它会自动识别为5+runtime项目
- 正常打包
- 把安装包下载下来，安装在手机上。



## Object.defineProperty()

作用：定义或者是修改对象的属性。

```javascript
<script type="text/javascript">
    let obj = {
        a: 1
    }
// 定义属性
Object.defineProperty(obj,"b",{
    value: 100
})

console.dir(obj)// {a:1,b:200}
</script>
```

vue2.X中的数据双向绑定就是用它来实现的。



## 属性描述符- configurable enumerable

configurable: 能否再次修改

enumerable：能否枚举

```javascript
Object.defineProperty(obj,"c",{
    // 不允许再次配置这个属性
    configurable: false,
    // 这个属性能否被for in 循环遍历
    enumerable:true,
    value:100
})
```

