<template>
  <div class="personInfo">
    <div class="login">
        <img src="../../assets/icon03.png" alt=""><br>
        <span>注册倾城用户服务中心</span>
        <el-form  :model="regasterForm"  label-width='100px'  ref='regasterForm' style=" margin-top:30px; margin-left:210px;">
            <el-form-item label="用户名" prop="name" >
                <el-input  v-model="regasterForm.name"  placeholder="请输入用户名" style="width:440px;"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="password">
                <el-input  v-model="regasterForm.password" type='password' placeholder="请输入密码" @keyup.enter.native="login('loginForm')" style="width:440px;"></el-input>
            </el-form-item>
            <el-form-item label="电话"  prop="tel">
                <el-input  v-model="regasterForm.tel"  placeholder="请输入电话"  style="width:440px;"></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
                <el-input  v-model="regasterForm.email"  placeholder="确定后不能修改"  style="width:440px;"></el-input>
            </el-form-item>
             <el-form-item label="注册日期"  prop="time">
                <div class="block">
                   <el-date-picker v-model="regasterForm.time"  type="date"  placeholder="选择日期"></el-date-picker>
                </div> 
            </el-form-item>
            <el-form-item label="性别"   prop='gender'>
                <el-radio-group v-model="regasterForm.gender"> 
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-row>
            <el-col :span="24">
                <el-button  id='submit' @click="add('regasterForm')">注册</el-button>
                <div @click="regaster" id="regaster">已有账号，立即登录</div>
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
  data () {
    return {
      regasterForm:{},
      checked:'',
      time:'',
    }
  },
  methods:{
      add(regasterForm){
          this.$refs[regasterForm].validate((valid) => {
              if (valid) {
                var obj = {
                    name:this.regasterForm.name,
                    gender:this.regasterForm.gender,
                    time:this.regasterForm.time,
                    email:this.regasterForm.email,
                    password:this.regasterForm.password,
                    tel:this.regasterForm.tel
                }
                console.log(obj);
                this.saveUser(obj).then((result)=>{
                  console.log(result);
                });
              }else{
                  return false;
              }
          });
      },
      regaster(){
          this.$router.push('/person/login');
      },
      ...mapActions(['saveUser']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
       height:680px;
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