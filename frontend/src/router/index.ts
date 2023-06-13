import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import GuestView from "@/views/GuestView.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";
import jwtService from "@/service/jwtService";
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

// will be called when ever we navigate from one view to another view
// to: navigation we are going to
// from: navigation we come from
// next: logic if user should pass to next view or not
router.beforeEach(function (to, from, next) {
  let role;
  const key = jwtService.getJwt("jwt");

  try {
    role = jwtService.getProp(key).role;
  } catch (e) {
    role = "none";
  }

  if (to.name === "login" || to.name === "guest" || to.name === "register") {
    next();
  }
  if (to.name === "user") {
    if (key.accessToken !== undefined && role == "USER") {
      next();
    } else {
      next({ name: "login" });
    }
  }
  if (to.name === "admin") {
    if (key.accessToken !== undefined && role == "ADMIN") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});

export default router;
