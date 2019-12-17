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

		<div class="imgbox" @click="checkContent()">
			<img class="auto-img" :src="categoryD.img_url" />
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

	export default {
		components: {
			WhiteBetween
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
			checkContent(){
				let url = ""
				if(this.categoryD.category == 3){
					url = "/api/question/htmlcontent/"
				}else if(this.categoryD.category == 1){
					url = '/api/essay/htmlcontent/'
				}else if(this.categoryD.category == 2){
					url = '/api/serialcontent/htmlcontent/'
				}else if(this.music.category == 5){
					url = '/api/movie/htmlcontent/'
				}
				
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

		.forward {
			font-size: 14px;
			color: #2e2e2e;
			line-height: 25px;
			margin: 10px 20px;
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

		.imgbox {
			width: 335px;
			margin: 0 auto;
		}
	}
</style>
