/**
* @author: heyuxin
* @date: 2022/6/29 15:26
* @description: 导航栏
**/
<template>
  <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      menu-trigger="click"
  >
    <el-menu-item index="0">统一内网服务</el-menu-item>
    <div class="flex-grow"/>
    <el-sub-menu index="1">
      <template #title>
        <el-avatar
            :src="boy"
        />
      </template>
      <el-menu-item index="1-1" disabled>{{ `${store.state.realname}（${store.state.account}）` }}</el-menu-item>
      <el-menu-item index="3-3" @click="logout">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import boy from '@/assets/avatar/boy.png'
import girl from '@/assets/avatar/girl.png'
import {ref} from 'vue'
import {useStore} from 'vuex'

const activeIndex = ref('1')
const store = useStore()

const logout = () => {
  store.dispatch('logout').then(() => {
    location.reload()
  })
}
</script>

<style scoped>

.flex-grow {
  flex-grow: 1;
}
</style>