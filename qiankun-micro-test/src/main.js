import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  if (props.data) {
    store.commit("saveMain", props.data.mainData); // 将主应用传递的值存放至 store 中
  }
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app"); // 解决微应用的根 id 与其他 DOM 冲突：修改根 id 的查找范围
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 如果是独立运行，则手动调用渲染
  render();
}
if (window.__POWERED_BY_QIANKUN__) {
  // 如果是qiankun使用到了，则会动态注入路径
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 根据 qiankun 的协议需要导出 bootstrap/mount/unmount
export async function bootstrap(props) {
  console.log("micro bootstraped");
}
export async function mount(props) {
  render(props);
  console.log("micro mounted");
}
export async function unmount(props) {
  instance.$destroy();
  console.log("micro unmounted");
}
