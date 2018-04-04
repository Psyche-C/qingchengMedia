import Vue from 'vue'
import Router from 'vue-router'
// 首页
import FirstPage from '@/pages/firstPage/index'
import FirstPageInfo from '@/pages/firstPage/info'
// 关于倾城
import About from '@/pages/about/index'
import AboutInfo from '@/pages/about/info'
import AboutCulture from '@/pages/about/culture'
// 我们的服务
import Server from '@/pages/server/index'
import ServerInfo from '@/pages/server/info'
// 新闻中心
import News from '@/pages/news/index'
import NewsInfo from '@/pages/news/info'
// 招聘信息
import Need from '@/pages/need/index'
import NeedInfo from '@/pages/need/info'
// 个人中心
import Person from '@/pages/person/index'
import PersonInfo from '@/pages/person/info'
import PersonLogin from '@/pages/person/login'
import PersonRegaster from '@/pages/person/regaster'
// 投资者关系
import Contact from '@/pages/contact/index'
import ContactInfo from '@/pages/contact/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstPage',
      component: FirstPage,
      children:[{
      	path: 'info',
      	component: FirstPageInfo,
      }]
    },{
      path:'/about',
      component:About,
      children:[{
        path: 'info',
        component: AboutInfo,
      },{
        path: 'culture',
        component: AboutCulture,
      }]
    },{
      path:'/server',
      component:Server,
      children:[{
        path: 'info',
        component: ServerInfo,
      }]
      },{
      path:'/news',
      component:News,
      children:[{
        path: 'info',
        component: NewsInfo,
      }]
     },{
      path:'/need',
      component:Need,
      children:[{
        path: 'info',
        component: NeedInfo,
      }]
     },{
      path:'/person',
      component:Person,
      children:[{
        path: 'info',
        component: PersonInfo,
      },{
        path: 'login',
        component: PersonLogin,
      },{
        path: 'regaster',
        component: PersonRegaster,
      }]
     },{
      path:'/contact ',
      component:Contact ,
      children:[{
        path: 'info',
        component: ContactInfo,
      }]
     },
  ]
})
