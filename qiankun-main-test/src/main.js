import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;
Vue.use(ElementUI);

registerMicroApps([
  // 注册应用
  {
    name: "micro", // 微应用的名称
    entry: "//localhost:8087", // 微应用的地址
    container: "#micro-one", // 放置微应用的容器
    activeRule: "/vue", // 匹配逻辑
    props: { data: store.state } // 向微应用传递的值
  }
]);
start(); // 启动

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。
