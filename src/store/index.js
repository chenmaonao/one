import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

Vue.use(Vuex)

export default new Vuex.Store({
			state: {
				musicData:{},
				musicId: 0,
				bubbleShow: false,
				playState: false,
				weather: {
					city_name: "外星系",
					climate: "对流层",
					date: "999-9-9",
					humidity: "120",
					hurricane: "36级",
					temperature: "-273.15",
					wind_direction: "一阵妖风"},
					
				content_data:{
					date: "2012-11-10 06:00:00"
				},
				is_content_data:false,
				toast:null
				
				},
				mutations,
				actions,
				getters,
				modules: {}
			})
