<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
</style>
