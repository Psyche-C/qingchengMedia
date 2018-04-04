<template>
  <div class="need">
     <el-col :span="24" class=''>
				<el-card :body-style="{ padding: '0px' }" style=" margin-left:50px; position:relative;">
					<img :src="needBackground" style="width:95%;">
          <span id="recruitment">企业招聘</span>  {{zhaoPing.name}}
		    </el-card>
    </el-col> 
    <el-col class="activeRecuitment">
      <span id="dynamic">招聘动态</span>
      <el-collapse v-model="activeName" accordion class="detailedInfo">
        <el-collapse-item v-for="(m,index) in this.zhaoPing" :key='m' class="father">
             <template slot="title" class="four" style="font-size：20px;">
               <div style="font-size:18px; color:#682F67; ">{{m.name}}</div>
               </template>
             <div class="one">发布时间  {{m.fbTime}}</div>
             <div class="one">有效时间：{{m.yxTime}}</div>
             <div class="one">工作待遇：{{m.treatment}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </div>
</template>

<script>
import pic39 from '@/assets/pic39.png'
import moment from 'moment';
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'need',
  data () {
    return {
      needBackground:pic39,
      activeName: '1',
      msg:'',
    }
  },
  created(){
      this.findZhaoPing();
  },
  computed:{
    ...mapGetters(['zhaoPing']),
  },
  methods:{
     ...mapActions(['findZhaoPing']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #recruitment{
    display: block;
    height: 50px ;
    width: 150px;
    border: 1px  solid #4a2e4a;
    position: absolute;
    top: 160px;
    text-align: center;
    line-height: 50px;
    border-radius: 15px;
    font-size: 22px;
    color: #682F67;
    background: #ffffff;
    left: 500px;
  }
  
  #dynamic{
    height: 50px;
    width: 150px;
    color: #4a2e4a;
    margin-left: 100px;
    font-size: 24px;
    font-weight:bold;
  }
  .detailedInfo{
    margin-left: 130px;
    margin-top: 30px;
  }
  .el-collapse-item__header{
    font-size: 18px;
    color: #682F67;
  }
  .activeRecuitment .detailedInfo .father .one{
       margin-left: 50px;
       margin-top: 10px;
       color: #682F67;
       font-size: 16px;
  }
</style>