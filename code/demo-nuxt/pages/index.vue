<template>
	<div>
		<h1>{{title}}</h1>
		<ul>
			<li v-for="item in list" :key="item">{{item}}</li>
		</ul>
		<nuxt-link to="/page1">page1</nuxt-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:"hello nuxt",
				list:["空山不见人","但闻人语响"]
			}
		}
	}
</script>

<style>
</style>

