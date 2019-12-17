<template>
	<div class="bigbox">
		<cube-scroll ref="scroll">
			<CategoryBanner 
			v-for="(item,index) in listData" 
			:key="index" 
			:bannerData="item"/>
		</cube-scroll>
	</div>
</template>

<script>
	import CategoryBanner from '../components/allCom/CategoryBanner.vue'
		
	export default{
		data:()=>{
			return {
				listData:null,
				dataToast:null
			}
		},
		components:{
			CategoryBanner
		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				vm.$http("/api/banner/list/4").then((res)=>{
					vm.dataToast = vm.$createToast({
						time: 700,
						txt: 'Loading',
						mask: true
					})
					
					vm.dataToast.show()
					vm.listData = res.data.data
				})
			})
		}
	}
</script>

<style scoped>
	.bigbox{
		height: calc( 100vh - 45px );
	}
	
</style>
