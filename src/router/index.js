import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const prefix = (window).__POWERED_BY_QIANKUN__ ?
  process.env.VUE_APP_MICRO_ROUTER :
  "";
const routes = [{
    path: prefix + "/",
    name: "Home",
    component: Home,
    redirect: "/dashboard/overview",
  },
  {
    path: prefix + "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard"),
    children: [{
        path: "overview",
        name: "Overview",
        component: () => import("../views/Dashboard/Overview"),
      },
      {
        path: "analytics",
        name: "Analytics",
        component: () => import("../views/Dashboard/Analytics"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// 判断 qiankun 环境则进行路由拦截，判断跳转路由是否有 micro 应用开头前缀，没有则加上
if ((window).__POWERED_BY_QIANKUN__) {
  router.beforeEach((to, from, next) => {
    if (!to.path.includes(prefix)) {
      next({
        path: prefix + to.path,
      });
    } else {
      next();
    }
  });
}


export default router;