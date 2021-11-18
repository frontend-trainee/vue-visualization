import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/dashboard/overview",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard"),
    children: [
      {
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

export default router;
