import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

/* 引入字体 */
import "./static/font/font.css";
//引入icon-font
import "@/static/icon/iconfont.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
