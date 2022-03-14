import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const resolveHome = async (to, from, next) => {
  console.log(from, to);
  next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: resolveHome,
    },
    {
      path: "/blogs",
      name: "blogs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogsOverview.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/blogs/:id",
      component: () => import("../views/BlogDetail.vue"),
    },
  ],
});

export default router;
