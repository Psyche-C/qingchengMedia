<template>
  <div class="aboutInfo">
     <el-col :span="24" >
				<el-card :body-style="{ padding: '0px' }" style="width:94%; height:70%; margin-left:25px;">
					<img :src="company">
		    </el-card>
    </el-col> 
    <el-col>
      <div class="top">
        <hr><span>关于倾城</span><img :src="cmy" alt="">
      </div>
    </el-col>
    <el-col><div id="brands"><span>our</span> Brands</div></el-col>
    <el-col>
      <div class='inCompany'>
        <div class="inner">
           <div class="gongsi">
             <span class="one">倾城传媒股份有限公司</span><br>
             <span class="two">中国四A副理事长单位</span><br>
             <span class="two">中国一级广告服务业（综合服务类）</span>
           </div>
          <img src="../../assets/pic7.png" alt="">
        </div>
      </div>
    </el-col>
    <el-col class="companyInfo">
       <div style="width:680px;" class="aboutContext" v-for='i in info' :key='i'>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp{{i}} <br><br></div>
       <img :src="img" alt="" id="rightAbout">
    </el-col>
    <el-col>
      <div id="history"><span>qingcheng</span> history</div>
      <div style="margin-top:50px;">
        <el-steps  align-center status='process'>
          <el-step title="2018 " description='初探体育营销；内容衍生品 ' status='process'></el-step>
          <el-step title="2017 " description='打造倾城生态圈 ；爱德康赛、掌维科技、观达影视加盟倾城传媒 ' status='process'></el-step>
          <el-step title="2016 " description=" 投资内容、外延扩张 ； 科翼传媒加盟倾城传媒 " status='process'></el-step>
          <el-step title="2015 " description='2015.01.23 成功登深交所中小板，成为第一家在中国上市的民营广告公司（股票代码002712)' status='process'></el-step>
          <el-step title="2014 " description=' IPO 获证监会发审通过 山西公司设立' status='process'></el-step>
        </el-steps>
      </div>
    </el-col>
    <el-col class="children">
      <span>旗下的子公司</span>
      <div v-for='s in sonCompany' alt="子公司" :key="s">
         <img :src='s' alt="">
      </div>
    </el-col>
  </div>
</template>

<script>
import background from '@/assets/background.jpg'
import cmy from '@/assets/cmy.png'
import context from '@/assets/context.jpg'
import beijing from '@/assets/beijing.jpg'
import shanghai from '@/assets/shanghai.jpg'
import shanghaitwo from '@/assets/shanghaitwo.jpg'
import shanghaithree from '@/assets/shanghaithree.jpg'
import hangzhou from '@/assets/hangzhou.png'
export default {
  name: 'aboutInfo',
  data () {
    return {
			msg: '关于公司',
			company:background,
      cmy:cmy,
      info:['倾城传媒股份有限公司，全国文化企业三十强，中国4A副理事长单位。公司于2014年1月23日在深交所挂牌上市（股票代码：002712），中国第一家在主板上市的民营广告公司，是一家以内容为核心的传媒集团。','	公司成立于2000年，在北京、上海、广州、杭州都设有分公司，现员工总人数达800余人，旗下设有思美广告、思美影业、思美科技、思美体育、思美创新等多个事业群，拥有爱德康赛、掌维科技、观达影视、科翼传媒、智海扬涛等多家内容及营销领域的子公司。','	思美传媒以“全景·精准·传播”为定位，为客户提供从品牌管理与广告创意、娱乐内容营销、数字营销、全媒体策划及代理、公关推广到效果监测的全方位整合营销服务，全面提升客户的品牌价值。','在消费升级的大趋势下，思美传媒深度关注以90后、00后为主体的9000岁和新中产群体的消费方式，深信内容已成为帮助品牌连接消费者的核心资源，而互动与体验更成为强化消费者对品牌认知的关键。基于这样的洞察，思美秉承“以需求为驱动，以内容为核心，以价值为目标”的战略理念，实施以内容为核心的产业升级，构建多层次的产品化平台，以打通上下游的产业化运营，通过资源整合和模式创新不断创造新的价值。','公司目前已完成“IP源头+内容制作+营销宣发”的影视内容产业链闭环，并正向体育营销、内容衍生品开发、内容电商等泛娱乐领域纵深发展，不断完善产业布局，提供更加多元化的服务，帮助品牌在新的挑战中抓住先机，创造价值。','作为行业内“国际思维，本土战术”的典范，思美传媒不仅长期服务众多的中外知名品牌，更是致力于推动成长型中小企业的发展，为提升中国品牌影响力而不断努力。思美传媒的愿景是成为最具创新能力与专业精神的传媒集团，助力中国的品牌走进世界，让世界听到中国的声音。'],
      img:context,
      sonCompany:[beijing,shanghai,shanghaitwo,shanghaithree,hangzhou]
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
    left: 255px;
  }
  .top span{
    color: #ffffff;
    font-size: 26px;
    font-weight: bolder;
    position: absolute;
    top: -600px;
    left: 130px;
 } 
  .top img{
    position: absolute;
    top: -620px; 
    left: 480px;
  }
  #brands,#history{
      display: inline-block;
    	height: 40px;
			width: 500px;
			line-height: 100px;
			margin-left: 45%; 
			font-family: Arial;
			text-transform:uppercase;
			font-size: 26px;
  }
  #history{
    margin-left: 38%;
  }
  #brands,#history span{
     color: #682F67;
  }
  .inCompany {
     height: 418px;
     width: 1178px; 
     margin-top: 30px;
     margin-left: 26px;
     background: url("../../assets/band.jpg") no-repeat;
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
  .inCompany .inner span.two{
    font-size: 18px;
    font-weight: lighter;
    color: #fff;
  }
  .inCompany>inner>gongsi>.one{
    margin-top: 40px;
    height: 50px ;
    width: 40px;
    border: 5px solid red;
  }
  .inCompany .inner img{
    margin-top: 80px;
  }
  .companyInfo{
    margin-top: 50px;
  }
   .companyInfo img#rightAbout{
      margin-left: 798px;
      margin-top: -500px ;  
    }
   .companyInfo .aboutContext{
     font-size: 16px;
     color: #50384b;
     margin-left: 20px;
   }
   .el-step__description, .el-step__title,.el-step__head{
     color: #50384b;
   }
   .children span{
     margin-left: 30px;
     font-size: 24px; 
     color: #50384b;
   }
   .children img{
     float: left;
     margin-left: 50px;
     margin-top: 20px;
   }
</style>
