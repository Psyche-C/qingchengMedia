<template>
  <div class="course">
	<el-col>
        <div class='inCompany'>
            <img src="../../assets/contact.jpeg" alt="">
            <div class="inner">
                <div class="service">
                    <span class="one">全国服务热线：4008881234</span><br>
                    <span class="nine">全国服务邮箱：qingcheng@qc.cc </span><br>
                </div>
            </div>
        </div>
    </el-col>
    <!--在线留言：需先注册  -->
    <el-col>
        <div class="message">留言</div>
        <div class="back" style="margin-top:-40px; margin-left:1170px;">
             <el-button class="comeBack" style="color: #682F67; background: #f1d3f0; border:2px solid #f1d3f0" size="mini" @click="returns">返回</el-button>
        </div>
        <el-table :data="lyInfo"  class='table'  @row-click="detailed"  size='mini' v-show="flag">  
            <el-table-column  type="index" label="序号" align='center' style="color: #682F6;"></el-table-column>
            <el-table-column   prop="id" label="后台存储的id" style="color: #682F6;" v-if='false' align='center'></el-table-column>
            <el-table-column  prop="LyTitle" label="标题" align='center' style="color: #682F6;"></el-table-column>
            <el-table-column  prop="LyName" label="作者"  align='center' style="color: #682F6;"></el-table-column>
            <el-table-column  prop="LyTime" label="留言时间"  align='center' style="color: #682F6;"></el-table-column>
        </el-table>
        <div class="LyInfo" v-show="flag2">
             <div class="four">{{info1}}</div>
             <div style="margin-left:760px; cursor:pointer;" id="ww">
                    <el-badge class="wg"> 
                        <el-button  class="pingLun" size="mini" @click="editor">回复</el-button>
                    </el-badge>
                    <el-badge class="wg"> 
                        <el-button class="huiFu" size="mini" @click="adds">发表新主题</el-button>
                    </el-badge>
             </div>
            <!--富文本编辑器  -->
             <div class="composition" v-show="flag8">
               <div id="div1" class="toolbar" style=" width: 500px; height: 30px; margin-left: 300px; border:2px solid #f1d3f0; margin-top: 110px; "> </div>
               <div id="div2" class="text" style="width: 500px; height: 200px; margin-left: 300px; background-color:#f1d3f0;">
                    <div id="div3" style="font-size:20px; color:#682F67; height:30px; border-bottom:1px solid #000;">标题：{{LyTitle}}</div>
               </div>
               <div class="context" v-show="flag5">
                   <el-button size='mini' id="cancel" @click="cancelThree" >取消</el-button>
                   <el-button size='mini' id="submit" @click="submitThree">提交</el-button>
               </div>
            </div>
             <div class="five">发表于{{info3}} &nbsp;&nbsp;&nbsp; 作者：{{info2}}</div>
             <div class="six">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info4}}</div>
             <div class="block" v-show="flag7">
                <span class="demonstration">评论</span>
                <el-rate v-model="value" show-text :colors="['#99A9BF', '#ef9fee', '#c22abf']"></el-rate>
                <el-button :plain="true" @click="open6" size='mini' id="agree"><i class="fa fa-thumbs-up"></i>点赞</el-button>
             </div>
             <div class="wonderful" v-show="flag6">
                 <span>精彩评论</span>
                 <div class="one"  v-for='(item2,index) in arr2' :key='item2'><i id="picture" class="fa fa-user-circle-o fa-3x"></i>回复时间：{{item2}}
                      <div class="nine">{{arr[index]}}</div>
                 </div>
             </div>
        </div>
    </el-col>
    <el-col class="localtion">
        <div class="three">全国办公地</div>
        <el-row :span='12' v-for='(office,index) in officeImg' :key='office' style="width:600px; height:100px;  float:left; margin-left:40px; font-size:17px;">
            <img :src='office' alt="">
            <div style="height:40px; font-size:14px; margin-left:110px; margin-top:-40px; color:gray;">{{msg[index]}}</div>
            <div style="height:40px; font-size:14px; margin-left:110px; color:gray;">{{msgone[index]}}</div>
            <div style="height:12px; font-size:14px; margin-left:110px;  color:gray;">{{msg2[index]}}</div>
        </el-row>
    </el-col>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import path from 'path';
import $ from 'jQuery';
import moment from 'moment';
import E from 'wangeditor';
import contact2 from '@/assets/contact2.png'
import contact3 from '@/assets/contact3.png'
import contact4 from '@/assets/contact4.png'
import contact5 from '@/assets/contact5.png'
let flag =1;
export default {
  name: 'course',
  data () {
    return {
      officeImg:[contact5,contact3,contact2,contact4,],
      msg:['杭州市虎玉路41号八卦田公园正大门','北京市朝阳区朝外大街26号朝外MEN写字楼B座11层','上海市长宁区通协路288弄旭辉虹桥国际8号楼','广州市天河区林和西路9号耀中广场B座2207-08'],
      msgone:['T：0571-81590666','T：0571-81590666','T：0571-81590666','T：0571-81590666'],
      msg2:['F：021-3252 7558','F：021-3252 7558','F：021-3252 7558','F：021-3252 7558'],
      message:'',
      flag:true,
      flag2:false,
      flag5:false,
      flag7:true,
      flag6:true,
      info1:'',
      info2:'',
      info3:'',
      info4:'',
      Hf1:'',
      Hf2:'',
      Hf3:'',
      arr:[],
      arr2:[],
      LyInfo:'',
      value:'',
      LyTitle:'',
      editorContent:'',
      id:'',
      flag8:false,
    }
  },
  created(){
      this.findLyInfo();
      //console.log( window.sessionStorage.getItem('tolal'));
     
  },
  mounted:function(){
     //let id = window.sessionStorage.getItem('userId');
  },
  computed:{
    ...mapGetters(['lyInfo']),
  },
  methods:{
    returns(){
         this.flag = true;
         this.flag2 = false;
    },
    adds(){
        flag = 0;
        let id = window.sessionStorage.getItem('userId');
        let name = window.sessionStorage.getItem('name');
        if(id !== null){
            var editor = new E('#div1','#div2')
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.customConfig.menus = [
                    'head',
                    'bold',
                    'italic',
                    'underline',
                    'strikeThrough', 
                    'foreColor',  // 文字颜色
                    'backColor',  // 背景颜色
            ];
            editor.create();
            this.flag5 = true;
            this.flag8 = true;
        }else{
            this.$notify({
                title: '警告',
                message: '请先登录',
                type: 'warning'
            });  
        }
    },

    editor(){ 
        let id = window.sessionStorage.getItem('userId');
        let name = window.sessionStorage.getItem('name');
        if(id !==null){
           var editor = new E('#div1','#div2')
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.customConfig.menus = [
                    'head',
                    'bold',
                    'italic',
                    'underline',
                    'strikeThrough', 
                    'foreColor',  // 文字颜色
                    'backColor',  // 背景颜色
            ];
            editor.create();
            this.flag5 = true;
            this.flag8 = true;
        }else{
            this.$notify({
                title: '警告',
                message: '请先登录',
                type: 'warning'
            });  
        }
        
    },
    submitThree(){
         // 读取 text
        let HF = $('#div2').text();
        let a = HF+'；'+this.Hf2;
        let HFTime = new Date();
        let ss = moment(HFTime).format("YYYY-MM-DD HH:mm:ss;")+'；'+this.Hf1;
        console.log(ss);
        let id = window.sessionStorage.getItem('userId');
        let name = window.sessionStorage.getItem('name');
        if(flag == 1){
             let obj2 = {
                id:this.id,
                LyName:name,
                LyTime:this.info3,
                LyContent: this.info4,
                HF:a,
                HFTime:ss,
                LyTitle:this.info1,
            };
           console.log(22222222222,obj2);
           this.updateLyInfo(obj2).then((result)=>{
               this.findLyInfo();
           }).catch((error)=>{
                this.$notify({
                    title: '失败',
                    message: '提交失败，请重新提交',
                    type: 'error'
                });  
            });
        }else if(flag == 0){
            let LyTime = new Date();
            let mm = moment(LyTime).format("YYYY-MM-DD HH:mm:ss;");
            let title = $('#div3').text();
            let context2 = $('#div2').text();
            console.log(44444,title,context2);
            let obj3 = {
                LyName:name,
                LyTime:mm,
                LyContent: context2,
                HF:'',
                HFTime:'',
                LyTitle:title,
            };
            console.log(obj3);
            this.saveLyInfo(obj3).then((result)=>{}).catch((error)=>{
                this.$notify({
                    title: '失败',
                    message: '发表失败，请重新发表',
                    type: 'error'
                });  
            });
        }
        
        this.flag8 = false;
    },
    cancelThree(){
        this.flag8 = false;
    },
    detailed(row){
       this.id = row.id;
       this.flag = false;
       this.info1 = row.LyTitle;
       this.info2 = row.LyName;
       this.info3 = row.LyTime;
       this.flag2 = true;
       this.info4 = row.LyContent;
       this.Hf1 = row.HFTime;
       this.Hf2 = row.HF;
       this.arr2 = this.Hf1.split('；');
       this.arr = this.Hf2.split('；');
    },
    open6() {
        //window.sessionStorage.setItem('tolal',this.num++); 
        this.$message({
          showClose: true,
          message: '点赞成功',
          type: 'success'
        });
      },
    ...mapActions(['findLyInfo','updateLyInfo','saveLyInfo','']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.LyInfo .composition .context{
    margin-left:470px;
    margin-top: 10px;
}
.LyInfo .composition .context #cancel,#submit{
   background-color:#f1d3f0; 
   border: 2px solid #f1d3f0; 
   color: #682F67;
}
.LyInfo .composition .context #submit:hover{
   cursor:pointer;
   background-color: #ef9fee;
   color: #682F67;
   border: 1px solid #682F67 ;
}
.LyInfo .composition  .context #cancel:hover{
   cursor:pointer;
   background-color: #ef9fee;
   color: #682F67;
   border: 1px solid #682F67 ;
}
 .LyInfo #ww .wg{
    margin-top:60px;
 }
 .LyInfo{
    height: 950px;
    width: 1100px;
    background:#f6e1f6;
    margin-top: 20px;
    margin-left: 120px;
    position: relative;
    border-radius: 5px;
    }
 .LyInfo .four{
    position: absolute;
    top:30px;
    left: 70px;  
    color:#682F67;
    font-size: 24px;
 }
 .LyInfo .five{
    position: absolute;
    height: 40px;
    width: 930px;
    border-bottom: 2px solid #f1d3f0;
    top:70px;
    left: 75px;  
    font-size: 14px;
 }
  .LyInfo .six{
    position: absolute;
    top:140px;
    width: 800px;
    height: 30%;
    border-bottom: 2px solid #f1d3f0;
    left: 130px;  
    font-size: 18px;
   } 
   .LyInfo .block .demonstration{
    position: absolute;
    top: -2px;
    left:-50px;
    border-bottom:2px solid #f1d3f0;
   }
  .LyInfo .block{
    position: absolute;
    top:340px;
    left: 200px;
  }
   .LyInfo .block #agree{
    position: absolute;
    top:-5px;
    left:180px;
    color: #682F67 ;
    background: #f1d3f0;  
    border: 1px solid  #f1d3f0;      
   } 
   .LyInfo .pingLun,.huiFu{
      color: #682F67 ;
      background: #f1d3f0;  
      cursor:pointer;
      border: 1px solid  #f1d3f0;      
   }
    .LyInfo .block #agree:hover{
        border: 1px solid #682F67 ;
        cursor:pointer;
        background-color: #ef9fee;
    }
.LyInfo .wonderful{
    position: absolute;
    border: 2px solid #f1d3f0;
    top:480px;
    width:800px;
    height: 45%;
    left:130px;
    overflow:auto;
}
.LyInfo .wonderful span{
    position: absolute;
    font-size: 20px;
    color: #682F67 ;
    top: 10px;
    left: 10px;
    width:780px;
    height: 10%;
    border-bottom: 2px solid  #f1d3f0;
}

.LyInfo .wonderful div.one #picture{
   float: left;
   margin-top: 20px;
   margin-left: -30px;
   clear: both;;
}
.LyInfo .wonderful div.one .nine{
    font-size: 16px;
    color: #682F67 ;
    margin-top: 10px;
    margin-left: 46px; 
}
.LyInfo .wonderful div.one{
    float: left;
    font-size: 16px;
    color: #682F67 ;
    margin-top: 60px;
    margin-left: 40px;
    clear: both;
}
 .table{
    width:1200px;  
    color: #682F67 ;  
    margin-left:60px; 
    margin-top:80px; 
    border:1px solid #f1d3f0;
    cursor: pointer;    
 }
 .inCompany{
     height: 418px;
     width: 600px;
     margin-top: 50px;
     margin-left: 450px;
     background-color: skyblue;
     border:2px solid #fff;
     position: relative;
  }
.inCompany .inner{
     height: 418px;
     width: 418px;
     background-color:#682F67 ;
     margin-left: -430px;
     margin-top: -420px;
     text-align: center;
     color: #fff;
     font-size: 28px;
     font-weight: bolder;
  }
  .inCompany .inner .service{
     position: absolute;
     top: 164px;
     left: -360px;
     font-size: 20px;
  }
  .localtion div.three,.message{
    margin-top: 20px ;
    color: #682F67;
    font-size: 26px;
    height: 50px;
    border-bottom: 2px solid #f1d3f0;
    margin-left: 40px;
    font-weight: bolder;
  }
  .localtion img{
      margin-top:50px;
  }
</style>
<style>
   #editorElem .w-e-text-container #text-elem8921564422993032{
    background-color:#682F67;
    } 
</style>
