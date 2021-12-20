import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import cerDome from  './cer-dome';
const  error = () => import(/* webpackChunkName: "error" */ '@/views/404.vue');
const about  = () => import(/* webpackChunkName: "about" */ "../views/About.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component:about
  },
  {
    path: "/:pathMatch(.*)",
    name: "Error",
    component: error,
  },
  ...cerDome
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
