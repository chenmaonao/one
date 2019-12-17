<template>
	<div v-if="showData" class="contentV">
		<div class="nav">
			<div class="back" @click="back"></div>
		</div>
		<iframe ref="ifrs" 
		:srcdoc="showData.html_content" 
		class="ifr" @load="loaddo"
		width="100vw"
		seamless >
			
		</iframe>
	</div>
</template>

<script>
	export default {
		data:()=>{
			return {
				showData:null
			}
		},
		props: {
			conUrl: String
		},
		methods:{
			loaddo(){
				this.$nextTick().then(()=>{
					this.$refs.ifrs.height = this.$refs.ifrs.contentWindow.document.body.offsetHeight
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.axios(vm.conUrl).then((res)=>{
					vm.showData = res.data.data
				})
			})
		},
	}
</script>

<style lang="scss" scoped>
	.contentV{
		height: 100vh;
		padding-bottom: 50px;
		padding-top: 50px;
		
		.nav{
			position: fixed;
			width: 100vw;
			height: 40px;
			top: 0;
			background-color: rgb(250,250,250);
			
			.back{
				width: 40px;
				height: 40px;
				background-image: url("/img/back.png");
				background-size: 20px 20px;
				background-position: center;
				background-repeat: no-repeat;
			}
		}
	}
	.ifr{
		width: 100vw;
	}
</style>
