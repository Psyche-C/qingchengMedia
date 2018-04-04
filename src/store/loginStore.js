import axios from 'axios';
import qs from 'querystring';

export default {
	state:{
		power:{},
	},
	getters:{
		power:state => state.power,
	},
	mutations:{
		allPower:(state,val) => {
			state.power = val;
		},
	},
	actions:{
		getPower:(context,obj) => {//带着token请求数据。
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.158.1:3000/Index',qs.stringify(obj)).then(({data})=>{
					context.commit('allPower',data);
					resolve(data);
				}).catch((error)=>{
					reject(error);
				});
			});
		},
		loginOut:(context,obj) => {//带着token请求数据。
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.158.1:3000/Logout/Logout',qs.stringify(obj)).then((result)=>{
					resolve(result);//去data里拿到code
				}).catch((error)=>{
					reject(error);
				});
			});
		},
        loginIn:(context,obj) => {//带着token请求数据。
			return new Promise((resolve,reject)=>{
				axios.get('http://192.168.158.1:3000/user/login?'+qs.stringify(obj)).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				});
			});
		},
	}
}
