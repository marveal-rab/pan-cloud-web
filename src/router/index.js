import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("@cp/Home.vue");
const Login = () => import("@cp/Login.vue");

const routes = [
  { path: "/", component: Home },
  {
    path: "/:ft",
    name: "files",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const isAuthenticated = false;

// router.beforeEach((to, from, next) => {
//   if (to.name !== "login" && !isAuthenticated) {
//     console.log("not authenticated");
//     next({ name: "login" });
//   } else {
//     console.log("authenticated");
//     next();
//   }
// });

export default router;
