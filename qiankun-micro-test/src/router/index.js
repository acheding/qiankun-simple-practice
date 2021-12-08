import Vue from "vue";
import Router from "vue-router";
import Micro from "@/views/micro";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "micro",
    component: Micro
  }
];

const router = new Router({
  mode: "history",
  base: "/vue", // 此处的"/vue"与注册微应用时的匹配逻辑相对应
  routes
});

export default router;
