import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/profile/:email",
    name: "ProfileDetails",
    // @ts-ignore
    component: () => import(/*webpackChunkName: "profile-details" */ '../pages/ProfileDetails.vue')
  },
  {
    path: "/blogs/:id",
    name: "BlogDetails",
    // @ts-ignore
    component: () => import(/*webpackChunkName: "blog-details" */ '../pages/BlogDetails.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
