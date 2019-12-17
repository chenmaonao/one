<template>
	<div class="dateView">
		<cube-scroll ref="scrolls" @pulling-up="selectDate" :options="options">
			<ul class="clearfix dateUl">
				<DayTittle v-for="(item,index) in feedsList" :key="index" :DayDate="item"></DayTittle>
			</ul>
		</cube-scroll>
	</div>
</template>

<script>
	import DayTittle from "./smallCom/DayTittle.vue"

	export default {
		data: () => {
			return {
				feedsList: [],
				year: null,
				month: null,
				options: {
					pullUpLoad: true
				}
			}
		},
		components: {
			DayTittle
		},
		methods: {
			refresh() {
				this.$nextTick().then(() => {
					this.$refs.scrolls.refresh()
				})
			},
			selectDate() {
				if (!this.year) {
					this.year = new Date().getFullYear();
					this.month = new Date().getMonth() + 1;
				} else {
					this.month--;
					if (this.month == 0) {
						this.year--;
						this.month = 12
					}
				}
				let url = 'http://v3.wufazhuce.com:8000/api/feeds/list/';
				this.axios(url + this.year + "-" + this.month).then((res) => {
					this.feedsList = this.feedsList.concat(res.data.data)
					this.refresh()
					this.$refs.scrolls.forceUpdate()

				})
			}
		},
		mounted() {
			this.selectDate()
		}
	}
</script>

<style lang="scss">
	.dateView {
		position: fixed;
		margin-top: 50px;
		width: 100%;
		top: 0;
		height: calc(100vh - 50px);
		background-color: #FFF;
		z-index: 31;

		.dateUl li:nth-child(even) {
			margin-left: 0px;
		}
	}
</style>
