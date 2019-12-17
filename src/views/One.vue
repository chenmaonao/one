<template>
	<div>
		<div class="nav">

			<div class="time" @click="showDate">
				<span class="day">{{topDate[2]}}</span>
				<span>{{topDate[1]}}.</span>
				<span class="year">{{topDate[0]}}</span>
				<i :class="{timeit:DateViewShow}"></i>
			</div>

			<div class="weaher">
				<span>{{weather.city_name}}﹐{{weather.climate}} {{weather.temperature}}℃</span>
			</div>
		</div>


		<DateView ref="DateView" v-show="DateViewShow" />

		<div class="content" v-if="is_content_data">
			<!-- <div class="scroll-list-wrap"> -->
			<cube-scroll ref="scroll">
				<div class="isnothing"></div>
				<category-zero></category-zero>
				<component v-for="(item,index) in content_data.content_list" 
				:is="item.category | filterCategory" 
				:key="index"
				:categoryD="item" :center="false"></component>


			</cube-scroll>
			<!-- </div> -->

		</div>

	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import CategoryZero from "../components/CategoryZero.vue";
	import CategoryOne from "../components/CategoryOne.vue";
	import CategoryMusic from "../components/CategoryMusic.vue";
	import BroadcastStudio from "../components/BroadcastStudio.vue";

	import DateView from "../components/DateView.vue";

	export default {

		data: () => {
			return {
				dataToast: null,
				DateViewShow: false
			}
		},
		filters: {
			filterCategory(val) {
				if (val == "1" || val == "2" || val == "3" || val == "5") {
					return "CategoryOne"
				} else if (val == "4") {
					return "CategoryMusic"
				} else if (val == "8") {
					return "BroadcastStudio"
				} else {
					return ""
				}
			}
		},

		computed: {
			...mapState({
				weather: "weather",
				content_data: "content_data",
				is_content_data: "is_content_data",
				toast: "toast",
			}),
			topDate() {
				let date = this.content_data.date.split(/\s/)[0].split("-");
				switch (date[1]) {
					case "1" || "01":
						date[1] = "Jan";
						break;
					case "2" || "02":
						date[1] = "Feb";
						break;
					case "3" || "03":
						date[1] = "Mar";
						break;
					case "4" || "04":
						date[1] = "Apr";
						break;
					case "5" || "05":
						date[1] = "May";
						break;
					case "6" || "06":
						date[1] = "Jun";
						break;
					case "7" || "07":
						date[1] = "Jul";
						break;
					case "8" || "08":
						date[1] = "Aug";
						break;
					case "9" || "09":
						date[1] = "Sept";
						break;
					case "10":
						date[1] = "Oct";
						break;
					case "11":
						date[1] = "Nov";
						break;
					case "12":
						date[1] = "Dec";
						break;
				}
				return date
			}
		},
		watch: {
			is_content_data(newval) {

				if (newval) {
					setTimeout(() => {
						this.dataToast.hide()
					}, 500);
				}
			},
			content_data() {
				this.DateViewShow = false;
				if(this.$refs.scroll){
					this.$refs.scroll.forceUpdate()
				}else{
					this.$nextTick(() => {
						this.$refs.scroll.forceUpdate()
					})
						
					
				}
				this.dataToast.show()
				this.$nextTick(() => {
					setTimeout(()=>{
						this.$refs.scroll.refresh()
						this.dataToast.hide()
					}, 1000);
				})
				// setTimeout(()=>{
				// 	
				// }, 1000);
			}

		},
		components: {
			CategoryZero,
			CategoryOne,
			CategoryMusic,
			BroadcastStudio,
			DateView
		},
		methods: {
			...mapActions({
				getData: "getData"
			}),
			...mapMutations(["SHOW_TOAST"]),
			showDate() {
				this.DateViewShow = !this.DateViewShow;
				this.$refs.DateView.refresh()
			}

		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				// vm.getData({
				// 	$http: vm.axios
				// })


				vm.dataToast = vm.$createToast({
					time: 5000,
					txt: 'Loading',
					mask: true
				})

				vm.dataToast.show()

				if (vm.is_content_data) {
					vm.dataToast.hide()
				}

			});
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		height: 50px;
		background-color: rgba(255, 255, 255, 0.9);
		z-index: 10;
		color: #6d6d6d;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;



		.weaher {
			position: absolute;
			right: 20px;
			bottom: 8px;
			font-size: 12px;
		}

		.time {
			position: absolute;
			bottom: 8px;
			color: #000000;
			font-family: "bodoni mt";
			font-size: 14px;
			margin-left: 10px;

			.year {
				margin-right: 5px;
			}

			.timeit {
				transform: rotate(180deg);
			}

			.day {
				display: inline-block;
				font-size: 30px;
				font-weight: 600;
				margin-right: 4px;

			}

			>i {
				display: inline-block;
				width: 0;
				height: 0;
				border-bottom: 4px solid #000000;
				border-right: 4px solid #000000;
				border-top: 4px solid transparent;
				border-left: 4px solid transparent;
				transition: all 0.3s;
			}
		}
	}

	.content {
		height: calc(100vh - 45px);
		width: 100vw;
		
		.isnothing{
			height: 50px;
			width:100vw;
		}

		.cube-scroll-wrapper {
			overflow: visible;
		}
	}
</style>
