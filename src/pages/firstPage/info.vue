<template>
    <div id="shouye">
      <!--轮播效果  -->
		  	<el-carousel :interval="4000" type='card' height="360px">
					<el-carousel-item v-for="item in itemImg" :key="item">
							<img :src="item" class="imgTop">
							<h3>{{item}}</h3>
						</el-carousel-item>
				</el-carousel>
				<el-col>
					<div id="server"><span>our</span> server</div>
          <!--我们的服务  -->
          <div class="our">
              <div class="ourInner">
                 <img :src="one" alt="">
                 <span>数字营销<br><span class="eglish">Digital marketing</span></span>
              </div>
              <div class="ourInner">
                <img :src="two" alt="">
                <span>内容营销<br><span class="eglish">Content marketing</span></span>
              </div>
              <div class="ourInner">
                <img :src="three" alt="" class='three'>
                <span>媒介营销<br><span class="eglish">Media marketing</span></span>
              </div>
          </div>
          <!--倾城新闻  -->
          <div class='news' style="margin-left:40%"><span>q i n g&nbsp;c h e n g</span>&nbsp;&nbsp;&nbsp;&nbsp; n e w s</div>
          <el-row>
            <el-col :span="8" v-for="(item,index) in itemImg" :key="item" :offset="index > 0 ? 4 : 0">
              <el-card :body-style="{ padding:'0px'}" class='cardServer'>
                <img :src="item" class="image" >
                <div class="cardBottom">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cardLeft">{{msg[index]}}</span>
                  <div class="bottom clearfix">
                    <time class="time" :formatter='dateFormat'>{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
           <!--关于倾城  -->
          <el-row  class='about' style="height:300px; width:1180px; margin-top:40px; margin-bottom:10px; backgound:#ccc;">
            <span><hr>ABOUT QINGCHENG</span><br>
            <img :src="loAbout" alt="" class="one"><br><br>
            <div style="width:680px;" class="aboutContext" v-for='c in context' :key='c'>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp{{c}} <br><br></div>
            <img :src="rightAbout" alt="" class="two">    
          </el-row>
				</el-col>
		</div>
</template>

<script>
import one from '@/assets/one.png'
import two from '@/assets/two.png'
import three from '@/assets/three.png'
import four from '@/assets/four.png'
import pic1 from '@/assets/pic1.png'
import pic2 from '@/assets/pic2.png'
import pic3 from '@/assets/pic3.png'
import pic5 from '@/assets/pic5.png'
import context from '@/assets/context.jpg'
import $ from 'jquery'
import moment from 'moment';   //处理时间的插件
export default {
  name: 'shouye',
  data:function(){
    return {
      title:'你好Vue',
      itemImg:[one,two,three,four],
      currentDate: new Date(),
      one:pic1,
      two:pic2,
      three:pic3,
      msg:["朱明虬董事长荣任杭州市体育休闲协会会长杭州体育休闲产业同舟共济","2017中国4A金印奖汇聚创意之美 倾城传媒荣获多项殊荣","以内容为核心创造价值 倾城传媒营销案例斩获多项大奖","洞见产业升级 破局内容营销 2017倾城传媒内容营销沙龙长沙行 "],
      loAbout:pic5,
      rightAbout:context,
      context:['倾城传媒股份有限公司，全国文化企业三十强，中国4A副理事长单位。公司于2014年1月23日在深交所挂牌上市（股票代码：002712），中国第一家在主板上市的民营广告公司，是一家以内容为核心的传媒集团。', '公司成立于2000年，在北京、上海、广州、杭州都设有分公司，现员工总人数达800余人，旗下设有倾城广告、倾城影业、倾城科技、倾城体育、倾城创新等多个事业群，拥有爱德康赛、掌维科技、观达影视、科翼传媒、智海扬涛等多家内容及营销领域的子公司。','	倾城传媒以“全景·精准·传播”为定位，为客户提供从品牌管理与广告创意、娱乐内容营销、数字营销、全媒体策划及代理、公关推广到效果监测的全方位整合营销服务，全面提升客户的品牌价值。']
    }
  },
  mounted:function(){
      // $('.leftNav').height($(window).height()-60);
  },
  methods:{
    // 事件格式化
    dateFormat:function(){
        var date = new Data();  
        if (date == undefined) {  
          return "";  
        }  
        return moment(date).format("YYYY-MM-DD");  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .about hr{
      border: 2px solid #CACACA;
      margin-left: 5px;
      display: inline-block;
      width: 100px;
      margin-top: 32px; 
    }
    .about .aboutContext{
      font-size: 16px;
      color: #50384b;
      margin-left: 20px;
    }
    .about span{
        color: #682F67;
        font-size: 24px;
        opacity: 0.65;
        padding: 20px;
    }
    .about img.one{
      margin-top: 20px;
      margin-left: 30px;
    }
    .about img.two{
      margin-left: 740px;
      margin-top: -550px ;
      width: 400px;
      height: 400px;
    }
    .imgTop{
      width:100%;
      height: 100%;
    }
	  #server,.news{
			height: 90px;
			width: 500px;
			line-height: 100px;
			margin-left: 45%;
			font-family: Arial;
			text-transform:uppercase;
			font-size: 24px;
      margin-top: 30px;
		}
     #server span,.news span{
       color: #682F67;
     }
    .our{
       height: 300px;
       width: 1175px;
       border: 1px solid skyblue;
       margin-left: 5%;
       background:url('../../assets/three.png');
       /* filter:"alpha(opacity=20)"; */
     } 
     .our>.ourInner{
       width: 389.4px;
       height: 300px;
       background: #613662;
       border: 0.5px solid #ccc;
       float: left;
        opacity: 0.82;    
     }
     .our>.ourInner:hover{
         cursor:pointer;
         background: #d361b1;
     }
     .our:hover{
       background-color: #613662;
       color: #fff;
     }
     .our>.ourInner img{
       color: #fff;
       margin-top: 80px;
       margin-left: 43%;
     }
     .our>.ourInner img.three{
       margin-left:35%;
     }
     .our>.ourInner span{
       color: #fff;
       display:block;
       margin-top:10px;
       margin-left:41.5%;
     }
     .our>.ourInner span .eglish{
       margin-left:-20%;
     }
    .time {
      font-size: 13px;
      color: #999;
    }    
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    .button {
      padding: 0;
      float: right;
    }
    .image {
      width: 80%;
      display: block;
    }
    .clearfix:before,.clearfix:after {
        display: table;
        content: "";
    } 
    .clearfix:after {
        clear: both
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
</style>
<style scoped>
  .el-carousel{
    margin:15px 60px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.45;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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
</style>
