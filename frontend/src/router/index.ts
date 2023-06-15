/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This is the route file that handle all routes in the vue application
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Views imports
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import GuestView from "@/views/GuestView.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";

// Child views imports
import AdminBookView from "@/views/AdminBookView.vue";
import AdminUserView from "@/views/AdminUserView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
    children: [
      { path: "books", component: AdminBookView },
      { path: "users", component: AdminUserView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation Guard that wasn't complete in time

// // router.beforeEach(function (to, from, next) {
// //   const token = jwtService.getJwt("jwt");
// //   const consumer = consumerService.getConsumer(token);

// //   if (to.name === "login" || to.name === "guest" || to.name === "register") {
// //     next();
// //   }

// //   if (to.name === "user") {
// //     console.log(consumer.role);
// //     if (consumer.role === "USER") {
// //       next();
// //     } else {
// //       next({ name: "login" });
// //     }
// //   }

// //   if (to.name === "admin") {
// //     if (consumer.role === "ADMIN") {
// //       next({path: "admin/books"})
// //     } else {
// //       next({ name: "login" });
// //     }
// //   }
// // });

export default router;
