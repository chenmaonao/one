<template>
	<div v-if="name" class="bigbox">
		<div class="imgbox">
			<img :src="name.img_url" class="auto-img" />
		</div>
		<div class="title">
			{{name.title}}<i></i>{{name.pic_info}}
		</div>
		<div class="forward">
			{{name.forward}}
		</div>
		<div class="words_info">
			{{name.words_info}}
		</div>
		
		<div class="bottom-card">
			<div class="fine">
				<span></span>发现
			</div>
			
			<div class="card">
				<ul class="clearfix">
					<li class = "write">
						<i></i>
					</li>
					<li class = "collect">
						<i></i>
					</li>
					<li class = "share">
						<i></i>
					</li>
					<li class = "praise">
						<i></i>
						<span class="like_count">{{name.like_count}}</span>
					</li>
				</ul>
			</div>
		</div>
		<white-between></white-between>
	</div>
</template>

<script>
	import WhiteBetween from "./smallCom/WhiteBetween.vue"
	
	
	export default {
		computed: {
			name() {
				return this.$store.state.content_data.content_list[0];
			}
		},
		components:{
			WhiteBetween
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.bigbox{
		background-color: #FFF;
		font-size: 14px;
		color: #7b7b7b;
		font-family: "book antiqua";
		text-align: center;
		
		
		.imgbox {
			width: 100vw;
			height: 250px;
		}
		
		.title{
			margin-top: 10px;
			
			>i{
				display: inline-block;
				height: 12px;
				margin: 0 6px;
				border-left: 1px solid #9b9b9b;
			}
		}
		
		.forward{
			font-size: 14px;
			color: #2e2e2e;
			line-height: 28px;
			padding: 50px 35px;
			text-align: left;
		}
		

	}
	
	.bottom-card{
		position: relative;
		padding: 10px;
		height: 40px;
		margin-top: 50px;
		
		.fine{
			position:absolute;
			left:10px;
			
			
			>span{
				display: inline-block;
				width: 18px;
				height: 18px;
				margin: 0 5px;
				background-image: url("/img/small/discovery.png");
				background-size: cover;
				vertical-align: middle;
				
				

			}
		}
	
		.card{
			position: absolute;
			right:30px;
			
			li{
				float: left;
				height:20px;
				width: 20px;
				margin: 0 10px;

			}
			
			i{
				display: inline-block;
				height: 100%;
				width: 100%;
				background-size: cover;
			}
		}
		
		.write{
			
			>i{			
				background-image: url('/img/small/diary_icon.png');	
			}
		}
		
		.praise{
			position: relative;
			
			>i{			
				background-image: url('/img/small/feeds_laud_default.png');	
			}
			
			.like_count{
				font-size: 8px;
				letter-spacing: 0px;
				position: absolute;
				transform: rotateY(40deg);
				top: -4px;
				left: 15px;
			}
		}
		
		.collect{
			
			>i{			
				background-image: url('/img/small/bubble_collect.png');	
			}
		}
		
		.share{
			
			>i{			
				background-image: url('/img/small/share.png');	
			}
		}
	}

</style>
