<template>
    <el-container style="height:630px;">
      <el-header height='60px' class="elheader">
        <div id="app">
          <el-row class="header">
            <el-col :span='4'>
              <div>
                <img :src="logo" alt="" id='logo'> 
              </div>
              <div class="title">倾城传媒</div>
            </el-col>
            <el-col :span='16' class="menue">
              <el-menu mode="horizontal" text-color='#682F67'  active-text-color="#682F67"  router :default-active="flag" class="el-menu-vertical-demo" unique-opened>
                  <el-submenu index="/firstPage">
                    <template slot="title">首页</template>
                     <el-menu-item-group>
                      <el-menu-item index="/firstPage/info">信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="/about" >
                    <template slot="title" style="font-size:20px;">关于倾城</template>
                    <el-menu-item-group>
                      <el-menu-item index="/about/info" >公司简介</el-menu-item>
                      <el-menu-item index="/about/culture">公司文化</el-menu-item>  
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="/server">
                    <template slot="title">我们的服务</template>
                    <el-menu-item-group>
                      <el-menu-item index="/server/info">服务介绍</el-menu-item>
                      <!-- <el-menu-item index="/clazz/test">test</el-menu-item> -->
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="/news">
                    <template slot="title">新闻周刊</template>
                    <el-menu-item-group>
                      <el-menu-item index="/news/info">倾城新闻</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu> 
                  <el-submenu index="/need">
                    <template slot="title">我们需要你</template>
                    <el-menu-item-group>
                      <el-menu-item index="/need/info">招聘信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu> 
                  <el-submenu index="/Contact ">
                    <template slot="title">联系我们</template>
                    <el-menu-item-group>
                      <el-menu-item index="/Contact /info">联系我们</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu> 
                  <el-submenu index="/person">
                    <template slot="title">个人中心</template>
                    <el-menu-item-group>
                      <el-menu-item index="/person/info">个人中心</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
              </el-menu>
            </el-col>
            <el-col :span='3'  type="flex" justify="end" :style={display:showUser}>
              <span id="login" @click="login"><i class="fa fa-user-circle-o"></i>{{msg1}}</span>
              <span id='regaster' @click="regaster">{{msg2}}</span>
            </el-col>
             <el-col :span='3' type="flex" justify="end" :style={display:userName} id="show">
             <span id='regaster'> <i class="fa fa-user-circle-o fa-lg"></i>{{msg3}}</span>
             <span id='regaster' @click="outLogin">{{msg4}}</span>
            </el-col>
          </el-row>
        </div> 
      </el-header>
      <el-main class="main">
        <!--路由出现的位置-->
        <router-view/>
        <el-col></el-col>  
      </el-main>
      <el-footer height='80px' class="foot">
         <el-row class="first">
            <el-col :span='4'>
              <span>关于倾城</span>
            </el-col>
            <el-col :span='4'>
              <span>我们的服务</span>
            </el-col>
            <el-col :span='4'>
              <span>新闻中心</span>
            </el-col>
            <el-col :span='4'>
              <span>社会责任</span>
            </el-col>
            <el-col :span='4'>
              <span>我们需要你</span>
            </el-col>
            <el-col :span='4'>
              <span>联系我们</span>
            </el-col>
         </el-row>
         <hr>
         <el-row class="two">
           <span>Copyright © 倾城传媒股份有限公司.  All right reserved</span>
           <img src="" alt="">
           <span>浙公网安备 345676876908879 技术支持 杰普网络</span>
         </el-row>
      </el-footer>
    </el-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import path from 'path'
import logo from '@/assets/logo.png'
import ElementUI from 'element-ui'
export default {
  name: 'app',
  data:function(){
    return {
      title:'你好Vue',
      logo:logo,
      showUser:'block',
      userName:'none',
      show:'ture',
      msg1:'登录',
      msg2:'/立即注册',
      msg3:'',
      msg4:'/退出',
      flag:'/firstPage/info',
    }
  },
  created(){
     this.fresh();
     if(userId !=="" && name !== ""){
       this.flag = this.$router.push('/person/info');
     }else{
       this.flag = this.$router.push('/firstPage/info');
     }
  },
  mounted:function(){
       //$('.main').height($(window).height()-240);()
  },
  computed:{
        ...mapGetters(['user']),
  },
  methods:{
    fresh(){
      let userId = window.sessionStorage.getItem('userId');
      let name = window.sessionStorage.getItem('name');
      if(userId !== null){
        this.showUser = 'none';
        this.userName = 'block';
        this.msg3 = name;
      }else if(userId== ''){
        this.showUser = 'block';
        this.userName = 'none';
      };
    },
    outLogin(){
      sessionStorage.clear();
      this.$router.push('/firstPage/info');
      location.reload();  
    },
    login(){
       this.$router.push('/person/login');
    },
    regaster(){
      this.$router.push('/person/regaster');
    },   
     ...mapActions(['findById']),
   },
  }
</script>

<style>
  #login,#regaster{
     line-height: 60px;
     font-size: 18px;
     color: #633165;
  }
   #login,#regaster:hover{
     cursor:pointer;
   }
  body{
    margin: 0;
    padding:0;
  }
  .el-header{
    margin-top:10px;
  }
  .header .title{
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-family: "Microsoft YaHei";
    /* position: relative;
    left: 128px; */
    margin-left: 100px;
    color:#633165;
  }
  #logo{
     height: 35px;
     width: 68px;
     position: absolute;
     top: 12px;
     left: 30px;
  }
  .el-menu{
     background: #fff;
     border: 1px solid #fff;
     font-size: 16px ;
  }
  .menue{
     /* margin-left:3px;  */
  }
  .foot{
    background: #363333;
  }
  .first{
    font-size: 20px;
    color: #f5dcf4;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    opacity: 0.7;
  }
  hr{
    width: 800px;
    opacity: 0.7;
  }
  .two{
    color: #f5dcf4;
    font-size: 12px;
    opacity: 0.7;
    text-align:center;
    margin-top:-5px;
  }
</style>
