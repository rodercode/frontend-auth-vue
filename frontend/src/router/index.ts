import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Views imports
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import GuestView from "@/views/GuestView.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";

// Service imports
import jwtService from "@/service/jwtService";
import consumerService from "@/service/consumerService";

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

router.beforeEach(function (to, from, next) {
  const token = jwtService.getJwt("jwt");
  const consumer = consumerService.getConsumer(token);

  if (to.name === "login" || to.name === "guest" || to.name === "register") {
    next();
  }

  if (to.name === "user") {
    console.log(consumer.role);
    if (consumer.role === "USER") {
      next();
    } else {
      next({ name: "login" });
    }
  }

  if (to.name === "admin") {
    if (consumer.role === "ADMIN") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});

export default router;
