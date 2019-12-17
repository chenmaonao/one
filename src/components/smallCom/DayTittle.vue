<template>
	<li class="bigbox">
		<div class="cover" @click="changeDay">
			<img :src="DayDate.cover" class="auto-img"/>
		</div>
		<div class="date">
			{{DayDate.date}}
		</div>
	</li>
</template>

<script>
	import {mapActions} from "vuex"
	export default {
		data: () => {
			return {
				test: {
					
				}
			}
		},
		methods:{
			...mapActions(["getData"]),
			changeDay(){
				this.getData({$http:this.axios,day:this.DayDate.date})
			}
		},
		props:{
			DayDate:Object
		}
	}
</script>

<style lang="scss" scoped>
.bigbox{
	width: 42.5vw;
	margin:5vw;
	margin-bottom: 0;
	border:1px solid #ddd;
	float:left;
	
	
	.cover{
		width: 100%;
		height:25vw;
	}
	
	.date{
		height:10vw;
		font-size: 16px;
		color: #7D7D7D;
		text-align: center;
		line-height: 10vw;
	}
}

</style>
