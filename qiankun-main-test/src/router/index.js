import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/main";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  }
];

const router = new Router({
  mode: "history", // 设置路由模式为 history
  routes
});

export default router;
