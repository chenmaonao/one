<template>
	<div>
		<div class="bigbox">
			<div class="imgbox">
				<img :src="bannerData.cover" class="auto-img" @click="toContent"/>
			</div>
			<div class="title">
				{{bannerData.title}}
			</div>
		</div>
		<WhiteBetween />
	</div>
</template>

<script>
	import WhiteBetween from "../smallCom/WhiteBetween.vue"

	export default {
		data: () => {
			return {
			}
		},
		props:{
			bannerData:Object
		},
		methods:{
			toContent(){
				let url = '/api/topic/htmlcontent/'
				this.$router.push({name:"content",
				params:{conUrl: url+this.bannerData.content_id}})
			}
		},
		components: {
			WhiteBetween
		}
	}
</script>

<style lang="scss" scoped>
	.bigbox {
		width: 100vw;
		height: 270px;

		.imgbox {
			width: 90vw;
			height: 200px;
			margin: 5vw;
		}

		.title {
			padding-left: 5vw;
			font-size: 16px;
		}
	}
</style>
