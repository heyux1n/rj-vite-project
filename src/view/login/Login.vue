/**
* @author: heyuxin
* @date: 2022/6/23 14:44
* @description: 登录页
**/
<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
             label-position="left">
      <h3 class="title">内网统一登录</h3>
      <el-form-item prop="account">
        <el-input v-model="loginForm.account" autoComplete="on"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        account: 'admin',
        password: '123456'
      },
      loginRules: {
        account: [{required: true, trigger: 'blur', message: "请输入用户名"}],
        password: [{required: true, trigger: 'blur', message: "请输入密码"}]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('login', this.loginForm).then(() => {
            this.loading = true
            this.$router.push({path: '/'})
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.login-container {
  display: flex;
  justify-content: center;

  .login-form {
    width: 350px;
    padding: 35px 35px 15px 35px;
    margin: 180px auto;
  }

  .title {
    font-size: 26px;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>