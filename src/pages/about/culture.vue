<template>
  <div class="aboutCulture">
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
    <el-col class="idea"><div id="brands"><span>qingcheng</span> idea</div>
       <img class="one" src="../../assets/pic11.png" alt="经营理念图片">
       <img class="two" src="../../assets/pic28.png" alt="">
       <div class="hope">愿景<br>成为最具创新能力与专业精神的传媒集团 </div>
       <div class="responsibility">使命<br>提供合理传播方案，提升客户品牌价值 </div>
       <div class="position">服务定位<br>全景精准传播</div>
       <div class="target">企业目标<br>百年老店</div>
       <div class="habit"> 作风<br>坚持 专一  专注 创新</div>
       <div class="core">核心理念<br>细节成就经典</div>
       <div class="business">经营理念<br>提供合理传播方案，提升客户品牌价值</div>
    </el-col>
    <el-col class="concept">
      <img src="../../assets/pic18.png" alt="">
      <!-- <el-carousel :interval="4000" type='card' height="360px" style="margin-top:-360px;" >
        <el-carousel-item v-for="item in itemImg" :key="item" style="width:460px">
            <img :src="item" class="imgTop" style="width:100%; height;100%;">
            <h3>{{item}}</h3>
          </el-carousel-item>
      </el-carousel> -->
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
import one from '@/assets/one.png'
import two from '@/assets/two.png'
import three from '@/assets/three.png'
import four from '@/assets/four.png'
export default {
  name: 'aboutCulture',
  data () {
    return {
      msg: '关于公司222',
      company:background,
      cmy:cmy,
      itemImg:[one,two,three,four],
    }
  },
  created:function(){
    // this.stepHistory();
  },
  methods:{

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
  #brands{
    display: inline-block;
    height: 40px;
    width: 500px;
    line-height: 100px;
    margin-left: 42%; 
    font-family: Arial;
    text-transform:uppercase;
    font-size: 26px;
  }
  #brands span{
    color: #682F67;
  }
  .idea{
    position: relative;
  }
  .idea .one{
     margin-top: 80px;
     margin-left: 330px;
  }
  .idea .two{
    position: absolute;
    top: 400px;
    left: 590px;
   }
   .idea .hope{
    position: absolute;
    top: 100px;
    left: 370px;
    color: #682F67;
   }
   .idea .responsibility{
    position: absolute;
    top: 160px;
    left: 880px;
    color: #682F67;
   }
   .idea .position{
    position: absolute;
    top: 300px;
    left: 230px;
    color: #682F67;
   }
   .idea .target{
    position: absolute;
    top: 289px;
    left: 980px;
    color: #682F67;
   }
   .idea .habit{
    position: absolute;
    top: 540px;
    left: 980px;
    color: #682F67;
   }
  .idea .core{
    position: absolute;
    top: 580px;
    left: 245px;
    color: #682F67;
   }
  .idea .business{
    position: absolute;
    top: 700px;
    left: 900px;
    color: #682F67;
   }
   .concept img{
     margin-top: 80px;
     width: 90%;
     margin-left: 65px;
   }
</style>
