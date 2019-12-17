<template>
		<div class="music">
			<audio :src="musicData.audio_url" ref="audioP" loop autoplay></audio>
			
			<div class="control-box">
				<div class="title">{{musicData.title}}</div>
				<div class="control">
					<div class="mask" :style="'left:'+350*playb+'px' "></div>
					<div class="progress" :style="'width:'+350*playb+'px' "></div>
					<div class="layer"></div>
				</div>
				<div class="volume">{{musicData.audio_author?musicData.audio_author:musicData.volume}}</div>
			</div>
			
			<div class="state-control">
				<div class="prev"></div>
				<div :class="pp" @click="changePlayStates()"></div>
				<div class="next"></div>
			</div>
			
	
		</div>


</template>

<script>
	import {mapState,mapMutations} from "vuex"
	
	export default{
		computed:{
			...mapState({
				musicData: "musicData",
				playState: "playState",
				musicId: "musicId"
			}),
			pp(){
				if(this.playState){
					return "pause"
				}else{
					return "play"
				}
			}
		},
		data:()=>{
			return {
				playb: 0 
			}
		},
		watch:{
			playState(newval){
				if(newval){
					this.$refs.audioP.play()
				}else{
					this.$refs.audioP.pause()
				}
				
			},
			musicId(){
				
			},
		},
		methods:{
			...mapMutations({changePlayStates: "CHANGE_PLAYSTATE"})
		},
		mounted(){
			let that = this
			this.$refs.audioP.ontimeupdate = function(){
				that.playb = this.currentTime/this.duration
			}
		}
	}
</script>

<style lang="scss" scoped>
	.music{
		position: fixed;
		width: 100vw;
		height: 200px;
		top:0;
		right: 0;
		background-color: #fff;
	}
	
	.control-box{
		width: 100vw;
		
		.title{
			text-align: center;
			font-size: 18px;
			color: #808080;
			display: block;
			margin-top: 5px;
			line-height: 30px;
		}
		
		.volume{
			text-align: center;
			color: #808080;
			font-size: 12px;
		}
	}
	
	.control{
		position: relative;
		background-color: #ededed;
		border-radius: 4px;
		height: 4px;
		width: 350px;
		margin: 13px auto;
		
		.progress{
			height: 100%;
			width: 60px;
			background-color: #000000;
		}
		
		.mask{
			position: absolute;
			left: 30px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			margin-top: -2px;
			background-color: #000000;
		}
	}
	
	.state-control{
		width: 210px;
		height: 50px;
		margin: 30px auto;
		
		>div{
			float: left;
			height: 50px;
			width: 50px;
			margin-right: 30px;
			background-size: cover;
		}
		.next{
			margin-right: 0px;
			background-image: url("/img/play/next_disable_night.png");
		}
		
		.prev{
			background-image: url("/img/play/last_disable_night.png");
		}
		
		.play{
			background-image: url("/img/play/player_play.png");
		}
		
		.pause{
			background-image: url("/img/play/player_pause.png");
		}
	}

</style>
