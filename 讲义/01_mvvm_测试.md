

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



## 第1题

### 题目

下面代码会输出什么？

```javascript
var obj = {a:1};
// 如何给obj添加一个名为b，值为100的只读的属性？
// 在这里写你的代码
console.log(obj.b); // 100
obj.b = 200; 
console.log(obj.b); // 100
```



### 答案

下面代码会输出什么？

```javascript
var obj = {a:1};
// 如何给obj添加一个名为b，值为100的只读的属性？
Object.definedProperty(obj, "b",{
	value: 100,
    writable: false
})

```

