<template>
	<div>
		<h1>page1</h1>
		<p>{{name}}</p>
		<nuxt-link to="/">返回主页</nuxt-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name:"另一个页面"
			}
		}
	}
</script>

<style>
</style>
