<template>
	<div class="bigbox">
		

		<div class="imgbox">
			<img class="auto-img" :src="categoryD.img_url" />
			
			<div class="bottom-card clearfix" @click="contentM">
			
				
				<div class="volume-title">
					<PlayPause :locMusic="categoryD" class="player"/>
					
					<div class="volume">
						{{categoryD.volume}}
					</div>
					<div class="title">
						{{categoryD.title}}
					</div>
					
				</div>
				
				
				<div class="tit">
					
					<div class="author">
						<span class="author-img">
							<img :src="categoryD.author.web_url" class="auto-img"/>
						</span>
						<span class="author-name">
							{{categoryD.author.user_name}}
						</span>
					</div>
					
					
					<div class="card">
						<div class="share">
							<i></i>
						</div>
						<div class="praise">
							<i></i>
							<span class="like_count">{{categoryD.like_count}}</span>
						</div>
					</div>
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
				}else{
					return "冥想"
				}
				
			},
			time() {
				let nowtime = new Date().toLocaleDateString();
				nowtime = 1111;
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
				let url = '/api/radio/htmlcontent/'
				this.$router.push({name:"content",
				params:{conUrl: url+this.categoryD.content_id}})
			}
			
			
		}


	}
</script>

<style lang="scss" scoped>
	.bigbox {

		.imgbox {
			position: relative;
			width: 100%;
			margin: 0 auto;
			color: #FFFFFF;
		}

	}
	
	.bottom-card {
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100vw;
		background-color:rgba(28,29,28,0.3);
	
		.tit {
			position: absolute;
			border-top: 1px solid #ddd;
			background-color:rgba(0,0,0,0.4);
			bottom: 0;
			height: 40px;
			padding: 10px 0;
			width: 100%;
			color: #fff;
	
		}
		
		
		
		.card{
			float: right;
			margin-right: 40px;
			
		}
	
		.praise {
			position: relative;
			float: left;
			height: 20px;
			width: 20px;
			margin: 0 10px;
	
			>i {
				display: block;
				height: 100%;
				width: 100%;
				background-size: cover;
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
			height: 20px;
			width: 20px;
			margin: 0 10px;
			float: left;
	
			>i {
				display: block;
				height: 100%;
				width: 100%;
				background-size: cover;
				background-image: url('/img/small/share.png');
			}
		}
	}
	
	.volume-title{
		position: absolute;
		bottom: 60px;
		width: 100%;
		padding-left:50px;
		
		.player{
			position: absolute;
			left: 10px;
			top: 14px;
		}
		
		.volume{
			font-size: 14px;
			line-height: 30px;
		}
		
		.title{
			font-size: 20px;
		}
	}
		
	.author{
		position: absolute;
		left:20px;
		top:5px;
		
		.author-img{
			display: inline-block;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			overflow: hidden;
		}
		
		.author-name{
			color: #ebebeb;
			vertical-align: super;
			line-height: 30px;
			font-size: 14px;
		}
		
	}
</style>
