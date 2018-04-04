import Vue from 'vue'
import Vuex from 'vuex'
import LoginStore from './LoginStore'
import UserStore from './UserStore'
import ly_infoStore from './ly_infoStore'
import ZhaoPingStore from './ZhaoPingStore'
import NewsStore from './NewsStore'

//必须在创建Store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		LoginStore,
		UserStore,
		ly_infoStore,
		ZhaoPingStore,
		NewsStore,
	}
})