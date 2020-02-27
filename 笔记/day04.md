## 给表单元素添加input事件，实现从视图到数据

```javascript
// 当前节点有v-model属性
if( dom.hasAttribute("v-model") ) {
    // 取出属性值：
    // 把对象中的key属性的值，显示在当前的input框中。
    var key = dom.getAttribute("v-model");
    dom.value = this.vm[key]

    // 添加监听者
    // 当key属性发生变化时，去更新input框中的值
    ec.addListener(key,()=>{
        dom.value = this.vm[key]
    })

    // 给元素本身添加input事件
    dom.addEventListener("input",(e)=>{
        // console.dir(e)
        // 1. 获取当前用户改完之后的值
        console.log(e.target.value)
        // 2. 设置给对象的属性值（数据）
        //    会进入到set拦截器,发布消息
+        this.vm[key] = e.target.value

        console.log("用户在input中做了修改")
    })

}
```



## 实现@click功能

思路：

- 在构造器中把methods中方法拷贝一份到vm中。

- 找出有@click的元素结点
  - 给它加click事件，在click事件中执行对应的方法



快速实现属性拷贝

```javascript
function MVVM(options) {
   
    const {data,el,methods} = options

    //....

    
    // methods中的属性也给this对象来一份
    Object.assign(this, methods)
}
```

![image-20200227103400394](asset/image-20200227103400394.png)