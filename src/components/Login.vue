<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       WELCOME LOGIN
      </span>
      <el-row>
        <el-input
          v-model="account"
          placeholder="YOUR NAME"
          type="text"
          class="txt"
          @keyup.enter.native="loginTodo">
        </el-input>
        <el-input
          v-model="password"
          placeholder="YOUR PASSWORD"
          type="password"
          class="txt"
          @keyup.enter.native ="loginTodo">
        </el-input>
          <el-button type="primary" class="btn" @click="loginTodo">LOGIN IN</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'Login',
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      loginToDo(){
        let obj = {
          name: this.account,
          password: this.password
        }
        this.$http.post('/auth/user', obj)
          .then((res) => {
            if(res.data.success){
            sessionStorage.setItem('demo-token', res.data.token);
            this.$message({
              type: 'success',
              message: '登录成功'
            });
            this.$router.push('/todolist')
        }else {
                this.$message.error(res.data.info);
                sessionStorage.setItem('demo-token',null);
            }
      },(err)=>{
            this.$message.error('请求错误!');
            sessionStorage.setItem('demo-token',null);
          }
      )
      }
    }
  }
</script>

<style scoped>
  .content {
    padding: 16px;
  }

  .title {
    font-size: 28px;
  }

  .txt {
    margin: 12px 0;
  }

  .btn {
    width: 100%;
    margin-top: 12px;
  }
</style>
