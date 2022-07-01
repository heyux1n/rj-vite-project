<template>
  <div class="wrapper">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
