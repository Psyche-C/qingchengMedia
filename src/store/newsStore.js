import axios from 'axios';
import qs from 'querystring'

export default {
	state:{
		 news:[]
	},
	getters:{
		 news:state=>state.news,
	},
	mutations:{
      alterNews:(state,data)=>{
         state.news = data;
	  }
	},
	actions:{
		findNews:(context)=>{
			return new Promise((resolve,reject)=>{
			    axios.get('http://localhost:3000/news/findAll').then(function(data){
					//数据处理，将后台传回的JSON格式的数据[{},{}]，处理为数组
					let array = [];
					data.data.forEach((i)=>{
						array.push({
							id:i.id,
							name:i.name,
							content:i.content,
							time:i.time,
							img:'http://127.0.0.1:3000/images/'+i.img,
						})
					});
					context.commit('alterNews',array);
					resolve(data);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
	}
}