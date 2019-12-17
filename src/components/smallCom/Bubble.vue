<template>

	<div class="bubble">
		<div class="bubble-box" @click="oplay" :class="ba">

		</div>
		<cube-popup type="my-popup" :mask="true" position="top" ref="myPopup" :maskClosable="true" @mask-click="maskClick">

			<MusicControl />

		</cube-popup>
	</div>

</template>

<script>
	import MusicControl from "../MusicControl.vue"
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				playNum: 1,
				isplay: false,
				mypop: null
			}
		},
		computed: {
			...mapState(["playState"]),
			ba() {
				if (this.playState) {
					return "bubble-play"
				} else {
					return ""
				}
			}

		},
		components: {
			MusicControl
		},
		methods: {
			maskClick() {
				this.mypop.hide()
			},

			oplay() {

				this.mypop = this.$refs.myPopup
				this.mypop.show()
				this.isplay = !this.isplay


			}
		}
	}
</script>

<style lang="scss" scoped>


	.bubble {
		height: 45px;
		width: 45px;
		position: fixed;
		top: 20%;
		right: 0;
		z-index: 999;



		.bubble-box {
			height: 45px;
			width: 45px;
			background-image: url("/img/bubble/float_player_pause.png");
			background-size: cover;
			background-repeat: no-repeat;

			&.bubble-play {
				animation: myplay 2s linear infinite;

				@keyframes myplay {
					0% {
						background-image: url("/img/bubble/float_player_play_1.png");
					}

					5% {
						background-image: url("/img/bubble/float_player_play_2.png");
					}

					10% {
						background-image: url("/img/bubble/float_player_play_3.png");
					}

					15% {
						background-image: url("/img/bubble/float_player_play_4.png");
					}

					20% {
						background-image: url("/img/bubble/float_player_play_5.png");
					}

					25% {
						background-image: url("/img/bubble/float_player_play_6.png");
					}

					30% {
						background-image: url("/img/bubble/float_player_play_7.png");
					}

					35% {
						background-image: url("/img/bubble/float_player_play_8.png");
					}

					40% {
						background-image: url("/img/bubble/float_player_play_9.png");
					}

					45% {
						background-image: url("/img/bubble/float_player_play_10.png");
					}

					50% {
						background-image: url("/img/bubble/float_player_play_11.png");
					}

					55% {
						background-image: url("/img/bubble/float_player_play_12.png");
					}

					60% {
						background-image: url("/img/bubble/float_player_play_13.png");
					}

					65% {
						background-image: url("/img/bubble/float_player_play_14.png");
					}

					70% {
						background-image: url("/img/bubble/float_player_play_15.png");
					}

					75% {
						background-image: url("/img/bubble/float_player_play_16.png");
					}

					80% {
						background-image: url("/img/bubble/float_player_play_17.png");
					}

					85% {
						background-image: url("/img/bubble/float_player_play_18.png");
					}

					90% {
						background-image: url("/img/bubble/float_player_play_19.png");
					}

					95% {
						background-image: url("/img/bubble/float_player_play_20.png");
					}

					100% {
						background-image: url("/img/bubble/float_player_play_20.png");
					}
				}
			}
		}
	}
</style>
