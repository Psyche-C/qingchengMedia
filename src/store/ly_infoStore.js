import axios from 'axios';
import qs from 'querystring'

export default {
	state:{
		 lyInfo:[]
	},
	getters:{
		 lyInfo:state=>state.lyInfo,
	},
	mutations:{
      alterLyInfo:(state,data)=>{
         state.lyInfo = data;
	  }
	},
	actions:{
		findLyInfo:(context)=>{
			return new Promise((resolve,reject)=>{
			    axios.get('http://localhost:3000/lyInfo/findAll').then(function(data){
					//数据处理，将后台传回的JSON格式的数据[{},{}]，处理为数组
					let array = [];
					data.data.forEach((i)=>{
						array.push({
							id:i.id,
							LyName:i.LyName,
							LyTime:i.LyTime,
							LyContent:i.LyContent,
							HF:i.HF,
							HFTime:i.HFTime,
							LyTitle:i.LyTitle,
						})
					})
					context.commit('alterLyInfo',array);
					resolve(data);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		//跟新、提交留言信息
	    updateLyInfo:(context,obj)=>{
			return new Promise((resolve,reject)=>{
				console.log(11111,obj);
				axios.post('http://192.168.158.1:3000/lyInfo/update',obj).then(function(result){
					//留言成功后保存修改刷新页面
					context.dispatch('findLyInfo');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		//发布主题
		saveLyInfo:(context,obj)=>{
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.158.1:3000/lyInfo/save',obj).then(function(result){
					//选课成功后保存修改刷新页面
					context.dispatch('findLyInfo');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
	   markStudentSelect:(context,setGrade)=>{
		  //console.log(11111,setGrade);//报错的话会终止请求
			return new Promise((resolve,reject)=>{
				axios.get('http://192.168.158.1:3000/sc/mark?'+setGrade).then(function(data){
					console.log(88888,data),
				    //录入成绩
					context.dispatch('findSelectedCourse');
					resolve(data);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
	}
}