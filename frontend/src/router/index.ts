import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import GuestView from "@/views/GuestView.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/guest",
    name: "guest",
    component: GuestView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
