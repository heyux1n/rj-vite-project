/**
* @author: heyuxin
* @date: 2022/6/23 14:44
* @description: 登录页
**/
<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginFormRef"
             label-position="left">
      <h3 class="title">内网统一登录</h3>
      <el-form-item prop="account">
        <el-input v-model="loginForm.account" autoComplete="on"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" @keyup.enter.native="handleLogin(loginFormRef)" v-model="loginForm.password"
                  autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" :loading="loading" @click.native.prevent="handleLogin(loginFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import type {FormInstance, FormRules} from 'element-plus'

const store = useStore()
const router = useRouter()

const loginFormRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
  account: [{required: true, trigger: 'blur', message: "请输入用户名"}],
  password: [{required: true, trigger: 'blur', message: "请输入密码"}]
})

const loginForm = ref({
  account: '',
  password: ''
})
const loading = ref(false)

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(valid => {
    if (valid) {
      store.dispatch('login', loginForm.value).then(() => {
        loading.value = true
        router.push({path: '/'})
      })
    }
  })
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