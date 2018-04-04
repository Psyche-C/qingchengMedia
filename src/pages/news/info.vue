<template>
  <div class="studentInfo">
     <!-- {{news}}  -->
      <div class='news' style="margin-left:40%"><span>q i n g&nbsp;c h e n g</span>&nbsp;&nbsp;&nbsp;&nbsp; n e w s</div>
        <el-row v-if='flag'>
           <template  >
            <el-col :span="8" v-for="(item,index) in this.news" :key="item.time" >
                <el-card :body-style="{ padding:'0px'}" class='cardServer'>
                <img :src="item.img" class="image" >
                <div class="cardBottom" style="height:80px;" @click="infomation(item)">
                  <div style="height:63px; border-bottom:1px dashed #ef9fee;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</div>
                  <div style="margin-top:5px;" >{{item.time}}</div>
                </div>
                </el-card>
            </el-col>
            </template>
        </el-row>
        <!--新闻的详情内容宣传  -->
        <el-row v-if='flag2'>
            <div id="five">{{name}}</div>
            <div id="nine">{{time}}</div>
            <div id="six"> <img :src="img2"></div>
            <div id="seven">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{content}}</div>
        </el-row>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import moment from 'moment';
import one from '@/assets/one.png'
import two from '@/assets/two.png'
import three from '@/assets/three.png'
import four from '@/assets/four.png'
export default {
  name: 'studentInfo',
  data () {
    return {
       flag:true,
       flag2:false,
       name:'',
       time:'',
       img2:'',
       content:'',
       msg:["朱明虬董事长荣任杭州市体育休闲协会会长杭州体育休闲产业同舟共济","2017中国4A金印奖汇聚创意之美 倾城传媒荣获多项殊荣","以内容为核心创造价值 倾城传媒营销案例斩获多项大奖","洞见产业升级 破局内容营销 2017倾城传媒内容营销沙龙长沙行 "],
    }
  },
  created:function(){
      this.findNews();
  },
  computed:{
      ...mapGetters(['news']),
  },
  methods:{
    infomation(i){
      console.log(i);
      this.flag = false;
      this.flag2 = true;
      this.name = i.name;
      this.time = i.time;
      this.content = i.content;
      this.img2 = i.img;
    },
     ...mapActions(['findNews']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #server,.news{
    height: 90px;
    width: 500px;
    line-height: 100px;
    font-family: Arial;
    text-transform:uppercase;
    font-size: 24px;
}
#server span,.news span{
    color: #682F67;
}
 .cardServer img{
    width: 100%;
    height: 95%;
}
.cardServer .cardBottom{
    padding: 14px;
    font-size:15px;
    color:#682F67;
}
.cardServer .cardBottom:hover{
    background-color: #682F67;
    color: #fff;;
    opacity: 0.95;
}
.el-col-8:first-child{
    margin-left:0px;
  }
  .el-col-8{
    width:23%;
    border:1px solid #ccc;
    border-radius:3px;
    margin-left:15px;
  }
  .el-col-8:hover{
     cursor:pointer;
  }
  .el-col-offset-2{
    margin-left:20px;
  }
  .el-row{
    margin-left:60px;
  }
  #five{
    margin-left: 100px;
    color: #682F67;
    font-size: 24px;
    margin-bottom: 10px;
  }
  #nine{
    color:#682F67;
    width: 1000px;
    font-size: 16px;
    margin-left: 100px;
    height: 50px;
    border-bottom:1px solid #682F67;
  }
  #six{
      width: 700px;
      height: 400px;
      border: 3px solid #e9d1f7;
      border-radius: 5px;
      margin-left:240px;
      margin-top: 40px;
      margin-bottom: 40px;
  }
   #six img{
      width: 100%;
      height: 100%;
   }
   #seven{
      color: #682F67;
      width: 860px;
      font-size: 16px;
      margin-left:150px;
      margin-bottom: 30px;
   }
</style>
