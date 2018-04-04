<template>
  <div class="personInfo">
    <div class="login">
        <img src="../../assets/icon03.png" alt=""><br>
        <span>登录倾城用户服务中心</span>
        <el-form  :model="loginForm" :rules='rules' label-width='100px' style=" margin-top:30px; margin-left:210px;" ref='loginForm'>
            <el-form-item label="用户名" prop="name" >
                <el-input v-model="loginForm.name"  style="width:440px;"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="password">
                <el-input v-model="loginForm.password" type='password'  @keyup.enter.native="login('loginForm')" style="width:440px;"></el-input>
            </el-form-item>
        </el-form>
        <el-row>
            <el-col :span="24">
                <el-button  id='submit' @click="login('loginForm')">登录</el-button>
                <div @click="regaster" id="regaster">没有账号，请先注册</div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import path from 'path';
export default {
  name: 'personInfo',
  created(){    
    
  },
  data () {
    return {
      loginForm:{},
      rules:{
        name:[
          {required:true,message:'请输入用户名',trigger: 'blur'},
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'blur'},
        ],
      },
    }
  },
  methods:{
      regaster(){
          this.$router.push('/person/regaster');
      },
      login(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
                var data = this.loginForm.name+'&'+this.loginForm.password;
                var vm = this;
                this.loginIn({name:data}).then((result)=>{
                   if(result.data.length==1){
                     this.$notify({
                        title: '成功',
                        message: '登录成功',
                        type: 'success'
                     });
                     window.sessionStorage.setItem("userId",result.data[0].id);
                     window.sessionStorage.setItem("name",result.data[0].name);
                     this.$router.push('/person/info');
                     location.reload();
                   }else if(result.data.length>0 && result.data =='用户名或密码错误'){
                      this.$notify({
                        title: '失败',
                        message: '用户名或密码不正确',
                        type: 'error'
                      });  
                   }else if (result.data.length>0 && result.data =='用户不存在，请先注册'){
                       this.$notify({
                        title: '警告',
                        message: '用户不存在，请先注册',
                        type: 'warning'
                      });  
                      this.$router.push('/person/regaster');
                   }
                }).catch((error)=>{
                console.log('login功能后台报错'+error);
            });
         } else {
            return false;
           }
        }); 
     },
    ...mapActions(['loginIn']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
       height: 430px;
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