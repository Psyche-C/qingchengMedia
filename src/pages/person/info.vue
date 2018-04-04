// 个人中心通过id查找用户信息
<template>
  <div class="personInfo">
    <div class="login">
        <img src="../../assets/icon03.png" alt=""><br>
        <span>倾城用户服务中心</span>
        <el-form  :data="user"  label-width='100px' style=" margin-top:30px; margin-left:210px;" :rules='rules'>
             <el-form-item label="用户ID" prop="id" >
                <el-input  v-model="user.data[0].id"   style="width:440px;" :disabled='bool'></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name" >
                <el-input  v-model="user.data[0].name"   style="width:440px;" :disabled='bool3'></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="password" >
                <el-input  v-model="user.data[0].password" type='password'  style="width:440px;" :disabled='bool3'></el-input>
            </el-form-item>
             <el-form-item label="确认密码"  prop="confirmPassword" v-show="confirm">
                <el-input   type='password'  style="width:440px;" ></el-input>
            </el-form-item>
            <el-form-item label="电话"  prop="tel">
                <el-input  v-model="user.data[0].tel"  style="width:440px;" :disabled='bool3'></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
                <el-input  v-model="user.data[0].email"  style="width:440px;" :disabled='bool3'></el-input>
            </el-form-item>
             <el-form-item label="注册时间"  prop="time">
                <el-input  v-model="user.data[0].time"  style="width:440px;" :disabled='bool'></el-input>
            </el-form-item>
            <el-form-item label="性别"   prop='gender'>
                <el-radio-group v-model="user.data[0].gender" :disabled='bool3'>
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-row>
            <el-col :span="24">
                <el-button  id='submit' @click="editor" v-show='bool1'>编辑</el-button>
                <el-button  id='submit' @click="save" v-show='bool2'>保存</el-button>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import $ from 'jquery';
import path from 'path';
export default {
  name: 'personInfo',
  data () {
    return {
      infoForm:{},
      checked:'男',
      bool:true,
      bool1:true,
      bool2:false,
      bool3:true,
      confirm:false,
      rules:{
        password:[
          {required:true,message:'请输入字母，数字混合的密码',trigger: 'change'},
        ],
        confirmPassword:[
          {required:true,message:'请确认输入的密码',trigger: 'change'},
        ],
      }
    }
  },
  created(){
     
  },
  mounted:function(){
      let id = window.sessionStorage.getItem('userId');
      if(id === ''){
        this.$router.push('/firstPage/info');
      }else{
        this.findById(id);
      }
   },
  computed:{
    ...mapGetters(['user']),
  },
  methods:{
      regaster(){
          this.$router.push('/person/login');
      },
      editor(){
        this.bool3 = false;
        this.confirm = true;
        this.bool1 = false;
        this.bool2 = true;
      },
      save(){
        this.bool3 = true;
        this.confirm = false;
        this.bool1 = true;
        this.bool2 = false;
        this.$confirm('是否确认修改?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            let obj = {
                id:this.user.data[0].id,
                name:this.user.data[0].name,
                gender:this.user.data[0].gender,
                time:this.user.data[0].time,
                email:this.user.data[0].email,
                password:this.user.data[0].password,
                tel:this.user.data[0].tel
            }
            this.updata(obj).then((result)=>{
                if(result.status == 200){
                    this.$notify({
                    title:'成功',
                    type: 'success',
                    message: '用户信息设置成功',
                    });
                }else{
                    console.log('用户信息设置失败，后台返回状态码：'+result.data.code);
                }
            }).catch((error)=>{
               console.log('用户信息设置失败，后台报错！-->'+error);
            });
        }).catch(() => {
            this.$notify({
            type: 'info',
            message: '已取消设置',
            });          
        });
      },
      ...mapActions(['saveUser','findAllUser','findById','updata']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
       height:750px;
       width: 1040px;
       background:#f6e1f6;
       margin-top: 20px;
       margin-left: 120px;
    }
    .login img{
        margin-left: 46%;
    }
    .login span{
        display: block;
        font-size: 26px;
        color: #633165;
        margin-top: 50px;
        text-align: center;
    }
    #submit{
        margin-left: 26%;
        width: 480px;
        background: #b637b4;
        color: #fff;
    }
    #regaster{
        text-align: center;
    }
</style>