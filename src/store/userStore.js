import axios from 'axios';
import qs from 'querystring'

export default {
	state:{
		user:[]
	},
	getters:{
		user:state=>state.user
	},
	mutations:{
		alterUser:(state,data)=>{
			state.user = data;
		}
	},
	actions:{
		saveUser:(context,obj)=>{
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.158.1:3000/user/save',obj).then(function(result){
					//保存成功之后
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		findAllUser:(context)=>{
			axios.get('http://192.168.158.1:3000/user/findAll').then(function({data}){
				context.commit('alterUser',data)
			})
		},
		findById:(context,id)=>{
			return new Promise((resolve,reject)=>{
                axios.get('http://192.168.158.1:3000/user/findById?id='+id).then(function(data){
					context.commit('alterUser',data);
					resolve(data)
				}).catch((error)=>{
					reject(error);
				});
			})
		},
		updata:(context,obj)=>{
			return new Promise((resolve,reject)=>{
                axios.post('http://192.168.158.1:3000/user/update',obj).then(function(result){
				    resolve(result)
				}).catch((error)=>{
					reject(error);
				});
			})
		},
	}
}