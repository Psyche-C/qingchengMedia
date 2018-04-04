import axios from 'axios';
import qs from 'querystring'

export default {
	state:{
		 zhaoPing:[]
	},
	getters:{
		 zhaoPing:state=>state.zhaoPing,
	},
	mutations:{
      alterZhaoPing:(state,data)=>{
         state.zhaoPing = data;
	  }
	},
	actions:{
		findZhaoPing:(context)=>{
			return new Promise((resolve,reject)=>{
			    axios.get('http://localhost:3000/zhaoPing/findAll').then(function(data){
					//数据处理，将后台传回的JSON格式的数据[{},{}]，处理为数组
					let array = [];
					data.data.forEach((i)=>{
						array.push({
							id:i.id,
							name:i.name,
							fbTime:i.fbTime,
							yxTime:i.yxTime,
							treatment:i.treatment,
						})
					})
					context.commit('alterZhaoPing',array);
					resolve(data);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
	}
}