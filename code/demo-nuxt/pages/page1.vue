<template>
	<div>
		<h1>page1</h1>
		<p>{{name}}</p>
		<nuxt-link to="/">返回主页</nuxt-link>
		<hr>
		<!-- <ul>
			<li v-for="(item,idx) in list" :key="idx">{{item.author}} - {{item.bookname}}</li>
		</ul> -->
		<ul>
			<li v-for="(item,idx) in serList" :key="idx">{{item.author}} - {{item.bookname}}</li>
		</ul>
		
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				name:"另一个页面",
				list:[]
			}
		},
		//  第一次请求这个页面时，它会在服务器端执行。
		//  随后，路由切换时，它会在客户端执行。
		
		//    原因是：在切换路由，后端接口可能产生了新的数据，此时，回到原页面，当然
		//    应该重新去发请求
		
		async asyncData(context){
			// context是自动传入的一个参数，它包含很多信息
			console.log(context)
			console.log("第一次在服务器端执行的代码.；路由切换时，它会在客户端执行....")
			// 需要返回一个对象，这个对象中的数据将会附加到vue组件中的data项中去
			// return {
			// 	a:1,
			// 	b:2,
			// 	serList:["a","b","nuxtjs"]
			// }
			let {data} = await axios( {
				method:"get", 
				url:'http://www.liulongbin.top:3006/api/getbooks',
				});
			console.log(data.data)
			
			return {
				serList:data.data
			}
		},
		// created(){
			
		// },
		// mounted(){
		// 	axios( {
		// 		method:"get", 
		// 		url:'http://www.liulongbin.top:3006/api/getbooks',
		// 		}).then(res=>{
		// 				this.list = res.data.data
		// 				console.log(res.data.data);
		// 			})
		// }
	}
</script>

<style>
</style>
