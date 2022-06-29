<script setup lang="ts">


</script>

<template>
  <div class="wrapper">
    <ul class="demo-icon-list">
      <li class="icon-item" @click="opUrl">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Calendar/></el-icon>
          <span class="icon-name">禅道</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Tickets/></el-icon>
          <span class="icon-name">showdoc</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Van/></el-icon>
          <span class="icon-name">jenkins</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><WindPower/></el-icon>
          <span class="icon-name">gitlab</span>
        </span>
      </li>

      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Odometer/></el-icon>
          <span class="icon-name">调用链</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Notebook/></el-icon>
          <span class="icon-name">客户端日志</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><ChatLineSquare/></el-icon>
          <span class="icon-name">中间件协调--云信</span>
        </span>
      </li>
      <li class="icon-item">
        <span class="demo-svg-icon">
          <el-icon :size="50"><Connection/></el-icon>
          <span class="icon-name">中间件协调--阿里云OSS</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  padding-top: 16%;
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-image: url("../assets/img/bg.jpg");
}

.demo-icon-list {
  margin: auto;
  width: 1000px;
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: solid 1px #e6e6e6;
  border-left: solid 1px #e6e6e6;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.icon-item {
  text-align: center;
  color: #f2f6fc;
  height: 160px;
  font-size: 13px;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
  transition: background-color 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
}

.icon-item:hover {
  background-color: #f2f6fc;
  color: #606266;
}

.demo-svg-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}

.icon-name {
  margin-top: 32px;
  font-size: 16px;
  font-weight: bold;
}
</style>
