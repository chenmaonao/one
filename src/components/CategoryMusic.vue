<template>
	<div class="bigbox">
		<div class="tag">
			- {{tag}} -
		</div>

		<div class="title">
			{{categoryD.title}}
		</div>

		<div class="author-name">
			文 / {{categoryD.author.user_name}}
		</div>

		<div class="imgbox">
			<PlayPause :locMusic="categoryD" color="black" class="player"/>
			<img class="auto-img" :src="categoryD.img_url" @click="contentM"/>
			<div class="double-border"></div>
		</div>
		<div class="audio-name">
			{{categoryD.audio_album}} | {{categoryD.audio_author}}
		</div>

		<div class="forward">
			{{categoryD.forward}}
		</div>

		<div class="bottom-card clearfix">
			<div class="time">{{time}}</div>


			<div class="right">
				<div class="share">
					<i></i>
				</div>
				<div class="praise">
					<i></i>
					<span class="like_count">{{categoryD.like_count}}</span>
				</div>
			</div>
		</div>

		<white-between></white-between>

	</div>
</template>

<script>
	import WhiteBetween from "./smallCom/WhiteBetween.vue"
	import PlayPause from "./smallCom/PlayPause.vue"
	
	export default {
		components: {
			WhiteBetween,
			PlayPause
		},
		props:{
			categoryD:Object
		},
		computed: {
			tag(){
				let a = this.categoryD.category;
				
				if(a == "1"){
					return "阅读"
				}else if(a == "2"){
					return "连载"
				}else if(a == "3"){
					return "问答"
				}else if(a == "5"){
					return "影视"
				}else if(a == "4"){
					return "音乐"
				}else{
					return "冥想"
				}
				
			},
			time() {
				let nowtime = new Date().toLocaleDateString();
				let post_time = this.categoryD.post_date.split(/\s/)[0].replace(/-/g, "/");
				post_time = this.delZeroTime(post_time,"/")
				if (nowtime == post_time) {
					return "今天"
				}else{
					let arr = post_time.split("/")
					
					return arr[1]+"月"+arr[2]+"日"
				}
			}
		},
		methods:{
			delZeroTime(string,re){
				let arr = string.split(re);
				for(let i = 0 ; i<arr.length;i++){
					arr[i] = arr[i].replace(/^[0]+/,"")
				}
				return arr.join("/");
			},
			contentM(){
				let url = '/api/music/htmlcontent/'
				
				this.$router.push({name:"content",
				params:{conUrl: url+this.categoryD.content_id}})
			}
			
			
		}


	}
</script>

<style lang="scss" scoped>
	.bigbox {
		
		.tag {
			color: #8b8b8b;
			text-align: center;
			font-size: 12px;
			margin: 10px 0;
		}

		.title {
			margin: 10px 20px;
			font-size: 20px;
		}

		.author-name {
			color: #8b8b8b;
			font-size: 14px;
			margin: 10px 20px;
			margin-top: 20px;
		}
		
		.player{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			z-index: 100;
		}

		.forward {
			font-size: 14px;
			color: #2e2e2e;
			line-height: 25px;
			margin: 15px 20px;
		}

		.bottom-card {
			height: 22px;
			width: 100vw;
			margin: 15px 0;
			margin-top: 35px;
			padding: 0 20px;

			.right {
				float: right;
				margin-right: 15px;
				color: #8b8b8b;

				>div {
					float: left;
					height: 20px;
					width: 20px;
					margin: 0 10px;
				}

				i {
					display: block;
					height: 100%;
					width: 100%;
					background-size: cover;

				}
			}

			.time {
				float: left;
				line-height: 20px;
				font-size: 14px;
				color: #8b8b8b;
			}

			.praise {
				position: relative;

				>i {
					background-image: url('/img/small/feeds_laud_default.png');
				}

				.like_count {
					font-size: 8px;
					letter-spacing: 0px;
					position: absolute;
					transform: rotateY(30deg);
					top: -4px;
					left: 18px;
				}
			}

			.share {

				>i {
					background-image: url('/img/small/share.png');
				}
			}
		}
		
		.audio-name{
			padding: 0 20px;
			font-size: 12px;
			color: #8b8b8b;
		}

		.imgbox {
			position: relative;
			width: 335px;
			height: 200px;
			padding: 0 67.5px;
			overflow: hidden;
			margin: 10px auto;
			
			>img{
				border-radius: 50%;
			}
			
			.double-border{
				position: absolute;
				top: 0;
				left: 0;
				border-top: 1px solid #ddd;
				border-bottom: 1px solid #ddd;
				height: 100%;
				width: 50%;
			}
		}
	}
</style>
