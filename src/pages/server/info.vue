<template>
  <div class="aboutInfo">
     <el-col :span="24" >
				<el-card :body-style="{ padding: '0px' }" style="width:90%; height:40%; margin-left:50px;">
					<img :src="service">
		    </el-card>
    </el-col> 
    <el-col>
      <div class="top">
        <hr><span>关于倾城</span><img :src="service2" alt="">
      </div>
    </el-col>
		<el-col><div id="brands"><span>our</span> service</div></el-col>
		 <el-col>
      <div class='inCompany'>
        <div class="inner">
           <div class="service">
             <span class="one">整合服务与专业服务</span><br>
             <span class="two">倾城传媒以“全景·精准·传播”为定位，业务范围包括消费者调研、品牌管理、全国媒体策划及代理、广告创意设计、内容娱乐行销、 </span><br>
						 <span class="two">公关推广活动、户外媒体运营、数字营销等全方位整合营销服务。</span>
           </div>
        </div>
      </div>
    </el-col>
		<img src="../../assets/service3.png" alt="运营规模" style="margin-top:50px;">
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
  </div>
</template>

<script>
import background from '@/assets/background.jpg'
import pic1 from '@/assets/pic1.png'
import pic2 from '@/assets/pic2.png'
import pic3 from '@/assets/pic3.png'
import cmy from '@/assets/cmy.png'
import context from '@/assets/context.jpg'
import service1 from '@/assets/service1.jpg'
import service2 from '@/assets/service2.png'
export default {
  name: 'aboutInfo',
  data () {
    return {
			msg: '关于公司',
			company:background,
      service:service1,
			img:context,
			one:pic1,
      two:pic2,
      three:pic3,
			service2:service2,
    }
  },
  created:function(){
    // this.stepHistory();
  },
  methods:{
    next(){
      if (this.active++ > 6) this.active = 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course{
    height: 60px;
    font-size: 20px;
    padding: 10px;
  }
   .top{
     position: relative;
   }
   .top hr{
    border: 4px solid #fff;
    margin-left: 5px;
    display: inline-block;
    width: 100px;
    font-weight: bolder;
    position: absolute;
    top: -595px;
    left: 345px;
  }
  .top span{
    color: #ffffff;
    font-size: 26px;
    font-weight: bolder;
    position: absolute;
    top: -600px;
    left: 230px;
 } 
  .top img{
    position: absolute;
    top: -800px; 
    left: 180px;
  }
	 .inCompany {
     height: 418px;
     width: 1178px; 
     margin-top: 50px;
     margin-left: 26px;
     background: url("../../assets/service4.png") no-repeat;
     background-color: skyblue;
     border:2px solid #fff;
  }
  .inCompany .inner{
     height: 418px;
     width: 418px;
     background-color:#682F67 ;
     margin-left: 760px;
     text-align: center;
     color: #fff;
     font-size: 28px;
     font-weight: bolder;
  }
	  #brands{
      display: inline-block;
    	height: 40px;
			width: 500px;
			line-height: 100px;
			margin-left: 45%; 
			font-family: Arial;
			text-transform:uppercase;
			font-size: 26px;
  }
  #brands span{
     color: #682F67;
		 margin-top: 50px;
  }
.our{
			height: 300px;
			width: 1175px;
			border: 1px solid skyblue;
			margin-left: 3%;
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
</style>
