import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

/* 引入字体 */
import "./static/font/font.css";
//引入icon-font
import "@/static/icon/iconfont.css";

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
  const {
    container
  } = props;

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window).__POWERED_BY_QIANKUN__) {
  render();
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  // router = null;
}