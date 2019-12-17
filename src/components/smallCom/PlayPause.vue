<template>
	<div class="big">
		
		<div class="player" :class="[isStatus(),backColor()]" @click.stop="playOrPause()">
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations	
	} from "vuex"

	export default {
		data: () => {
			return {
			}
		},
		watch:{

		},

		computed: {

			...mapState(["musicId","musicData","playState"]),

			status() {
				if (this.musicId == this.locMusic.id && this.playState) {
					return true
				} else {
					return false
				}
			}
		},
		props: {
			color: String,
			locMusic: Object
		},

		methods: {
			...mapMutations({setMusic: 'CHANGE_MUSIC', 
			setMusicId: 'CHANGE_MUSICID',
			bubbleShow: 'BUBBLE_SHOW',
			changePlayStates: "CHANGE_PLAYSTATE"}),
			playOrPause() {
				this.isplay = !this.isplay
				
				if(this.musicId != this.locMusic.id){
					this.bubbleShow(true)
					this.isplay = true
					this.changePlayStates(true)
					this.setMusicId(this.locMusic.id) 
					this.setMusic(this.locMusic)
				}else{
					this.changePlayStates()
				}
				
			},
			
			backColor() {
				if (this.color == "black") {
					return "black"
				}
			},

			isStatus() {
				if (this.status) {

					return "pause"
				} else {

					return "play"
				}
			}
		}
	}
</script>

<style>
	.big {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		overflow: hidden;

	}

	.player {
		height: 30px;
		width: 30px;
		background-size: cover;
	}

	.black {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.play {
		background-image: url("/img/small/play.png");
	}

	.pause {
		background-image: url("/img/small/pause.png");
	}
</style>
