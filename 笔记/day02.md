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

作用：**定义**或者是**修改**对象的属性。

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

## 属性描述符- value-writable

value:设置初始值；

writable：是否可以修改这个属性值

```javascript
Object.defineProperty(obj,"c",{
	// 是否允许修改
    // 默认是false，表示这个属性值就不能修改
    writable: true,

    // 当前属性的初始值
    value:200
})
```

如果在对象中已经有属性，也还可以通过Object.defindProperty再次去修改这个属性的描述符。



## 实现一个只读的对象

```javascript
let obj = {
				a: 1,
				abc:100
			}
			
			// 写代码，让obj.a,obj.abc是只读的，不能再去修改它们的值
			// 写你的代码 
			for(var key in obj) {
				console.log(key);
				Object.defineProperty(obj,key,{
					writable:false
				})
			}

			obj.a = 100;
			obj.abc = 1;
			
			console.log(obj)
```

## set,get

```javascript
let _age = 20;
			
// 如果我们设置了get,set 则当前的属性不能保存具体的值
// 如果一定保存具体的值，则需要使用另一个单独的变量
Object.defineProperty(obj,"age",{
    // get:function(){

    // },
    get(){
        // 当你去访问age属性时，它就会自动执行；
        // 这个函数的返回值，就表示当前属性的值。
        console.log("获取age")
        // return Date.now()
        return _age;
    },
    set(val){
        // 当我们设置这个属性时，它就会执行
        // 它会接收一个参数，就是当前要设置给这个属性的值
        console.log("设置age为",val)
        _age = val
    }
})
```

## get,set的应用1：从数据到视图的变化

```javascript
<div id="div">
			
</div>
<script type="text/javascript">
    let obj = {
        a: 1,
        b: 2
    }

let _b = 2
// 如果使用set,get则这个属性将不能直接用来保存真正的数据，
// 它只能做为拦截器
Object.defineProperty(obj,"b",{
    set(val){
        // 拦截器
        console.log( "你修改了b属性");
        // 接下来去修改视图
        document.getElementById("div").innerHTML = val
        _b = val
    },
    get(){
        console.log( "获取b属性");
        // return obj.b
        return _b
    }
})





</script>
```

## get和set它们与value和writable是互斥的



## 对已有对象进行拦截

<img src="asset/image-20200225154322011.png" alt="image-20200225154322011" style="zoom:50%;" />

```javascript
let obj = {
    a: 1,
    b: 2
}

let obj1 = {};
// 写代码
// 思路：对obj中的所有属性进行遍历，然后给obj1用object.definePropety()
//      添加属性

for(let key in obj) {
    console.log(key);
    // 给obj1添加同名的属性
    Object.defineProperty(obj1,key,{
        set(val){
            // 给拦截器添加功能：如果所设置的属性值<0,
            // 则报错
            console.log("当前正在修改",key,"值是",val)
            if(val >=0) {

                obj[key] = val
            } else {
                alert("拦截器发现了一个异常！值不能小于0")
            }
        },
        get(){
            console.log("当前获取",key,"值是")
            return obj[key]
        }
    })
}

console.log(obj1.b ) // 告诉我obj.b的值，同时还要能输出一条消息 
obj1.a = 100; // 能修改obj.a的值，同时还要输出一条消息
console.log(obj1.a ) // 告诉我obj.a的值，同时还要能输出一条消息 


```



## for var ,for let





## proxy

 Proxy（es6） 将在vue3版本中，用来实现数据响应式
Proxy:代理。它是一个构造器。
功能：通过Proxy创建对象，所创建的对象称为代理对象。

```javascript
// Object.defineProperty() 在vue2.X版本中，用来实现数据响应式
// Proxy（es6） 将在vue3版本中，用来实现数据响应式
// Proxy:代理。它是一个构造器。
// 功能：通过Proxy创建对象，所创建的对象称为代理对象。
// 格式：
// var newObj = new Proxy(原对象,{代理列表})

let obj = {
    a: 1,
    age:30
}
var newObj = new Proxy(obj,{
    // target就是当前代理的那个原对象obj
    // key就是当前要访问的属性
    // receiver就是代理对象 newObj
    get(target,key,receiver){
        // 当访问对象的属性就会进入get函数
        console.log( target,key,receiver )
        return obj[key]
    },
    // value就是当前要设置的值
    set(target,key,value){
        // 当访问对象的属性就会进入set函数
        console.log( target,key,value )
    },
})
newObj.age = 20
```



## 面试题：创建一个允许负数做下标的数组

```javascript
<script type="text/javascript">
    // 创建一个允许负数做下标的数组
    var arr = [1,2,3,5,6];

// console.log(arr[1]);
// var arr1 = new Proxy(原对象,{代理列表})
var arr1 = new Proxy(arr,{
    get(target,key){
        console.log( "获取" )
        // console.log( target,key)
        if(key > arr.length-1){
            // 数组越界
            console.error("智能提示，你的数组下标越界了",key)
            return undefined
        }
        if(key>=0) {

            return arr[key]
        } else {
            let newIndex = arr.length + key*1
            console.log( '获取的下标是负数:',key,newIndex)
            // return 
            return arr[newIndex]
        }
    },
    set(target,key,value){
        console.log( "设置" )
        console.log( target,key,value )
        if(key >=0){
            arr[key] = value
        }else {
            let newIndex = arr.length + key*1
            console.log( '设置的下标是负数:',key,newIndex)
            arr[newIndex] = value
        }
    }
})
// var arr1 = []
// 目标：写一段代码，得到一个arr1,

// ....
// (1)让这个arr1支持负数做下标
// arr1[-1] 就是arr中倒数第1个元素 ==>3
// arr1[-2] 就是arr中倒数第2个元素 ==>
// (2) 当用户访问的下标超过最大长度，不要给出undefined
//     而是给出一个错误提示

// ....
// console.log(arr1[-1])

</script>
```



## 作业

```javascript
var obj = {
    a:1,
    b:2
}
// 在Proxy中补全代码
var obj1 = new Proxy();

console.log( obj1.a ); // 返回1
console.log( obj1.abc ); // 返回undefined,但是，要同时提示为，这个abc属性不存在！

```

参考：

```javascript
var obj = {
		    a:1,
		    b:2,
			c:false
		}
		// 在Proxy中补全代码
		var obj1 = new Proxy(obj, {
			get(target,key){
				// console.log(target,key);
				// 1. 对象.hasOwnProperty(属性名）
			    // 如果这个属性在obj的自有属性（不是指继承的）中不存在，则返回undefined,并提示
				// 
				//     对象是否有这个属性，有，就返回true
				//          没有，就是false
				
				// 2 属性名 in 对象。
				//   判断在对象及对象的原型链上是否能找到属性名
				//          有，就返回true
				//          没有，就是false
				if(key in target) {
					return target[key]
				} else {
					console.warn(`你要访问的属性名${key}在对象中不存在`)
					return undefined
				}
				
			}
			
		})
		
		console.log( obj1.a );   // 返回1
		console.log( obj1.abc ); // 返回undefined,但是，要同时提示为，这个abc属性不存在！
	
```

