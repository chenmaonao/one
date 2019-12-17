import * as type from "./mutations-type.js"


export default {

	async getData(context,player){
		let {$http,day} = player
		if(!day){
			day = 0
		}
		
		
		await $http(`/api/channel/one/${day}/0?version=4.6.2`).then(res => {
		
			context.commit(type.GET_WEATHER,res.data.data.weather)
			context.commit(type.GET_CONTENT_DATA,res.data.data)
			context.commit(type.IS_CONTENT_DATA,true)
		})
		
	}
}