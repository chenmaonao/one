<template>
	<div id="app">
		<keep-alive>
			<router-view/>
			
		</keep-alive>
		
		<!-- 播放气泡控制器 -->
		<Bubble v-show="bubbleShow"/>
		<!-- 播放气泡控制器-end -->
		
		<div class="tabbar">
			<router-link class="one" tag="div" to="/one"></router-link>
			<router-link class="all" tag="div" to="/all"></router-link>
			<router-link class="me" tag="div" to="/me"></router-link>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from "vuex"
	import Bubble from "./components/smallCom/Bubble.vue";
	
	export default {
		computed:{
			...mapState({
				weather:"weather",
				bubbleShow:"bubbleShow"
			})
		},
		components:{
			Bubble
		},
		methods:{
			...mapActions({
				getWeather:"getWeather"
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";
	
	#app {
		
	}
	.tabbar{
		position: fixed;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 45px;
		display: flex;
		border-top:1px solid #DDDDDD;
		background-color:#fff;
		
		>div{
			flex: 1;
		}
		
		.all{
			@include backline('all')
			
			&.router-link-active{
				@include backfill('all')
			}
		}
		.one{
			@include backline(one)
			
			&.router-link-active{
				@include backfill('one')
			}
		}
		.me{
			@include backline(me)
			
			&.router-link-active{
				@include backfill('me')
			}
		}
	}
</style>
