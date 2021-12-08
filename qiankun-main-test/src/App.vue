<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal" default-active="/">
      <!-- 点击不同的菜单，跳转到对应的路由 -->
      <el-menu-item index="/">主应用</el-menu-item>
      <!-- 此处的"/vue"与注册微应用时的匹配逻辑相对应 -->
      <el-menu-item index="/vue">微应用</el-menu-item>
    </el-menu>
    <router-view />
    <!-- 定义存放微应用的容器 -->
    <div id="micro-one"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (this.$router.currentRoute.fullPath !== "/") {
      this.$router.push("/"); // 初始化路由
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu.el-menu--horizontal {
  width: 500px;
  margin: auto;
}
</style>
