import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PeppersView from "../views/PeppersView.vue";
import PepperView from "../views/PepperView.vue";
import SaucesView from "../views/SaucesView.vue";
import SauceView from "../views/SauceView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/peppers",
    name: "peppers",
    component: PeppersView,
  },
  {
    path: "/sauces",
    name: "sauces",
    component: SaucesView,
  },
  {
    path: "/peppers/:id",
    name: "PepperView",
    component: PepperView,
  },
  {
    path: "/sauces/:id",
    name: "SauceView",
    component: SauceView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
