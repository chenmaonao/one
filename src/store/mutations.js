import * as type from "./mutations-type.js"

export default {
	[type.GET_WEATHER](state,playload) {
		state.weather = playload
	},
	[type.GET_CONTENT_DATA](state,playload) {
		state.content_data = playload
	},
	[type.IS_CONTENT_DATA](state,playload) {
		state.is_content_data = playload
	},
	[type.SHOW_TOAST](state,playload) {
		state.toast = playload
	},
	[type.CHANGE_MUSIC](state,playload) {
		state.musicData = playload
	},
	[type.CHANGE_MUSICID](state,playload) {
		state.musicId = playload
	},
	[type.BUBBLE_SHOW](state,playload) {
		state.bubbleShow = playload
	},
	[type.CHANGE_PLAYSTATE](state,playload){
		if(playload){
			state.playState = playload
		}else{
			state.playState = !state.playState
		}
		
	}
	
}
