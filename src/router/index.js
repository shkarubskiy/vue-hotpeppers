import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHistory } from "vue-router";
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
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
