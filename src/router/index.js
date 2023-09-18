import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const Home = () => import("@cp/Home.vue");
const Login = () => import("@cp/Login.vue");

const routes = [
  { path: "/", component: Home },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

// router.beforeEach((to, from, next) => {
//   if (to.name !== "login" && !isAuthenticated) {
//     console.log("not authenticated");
//     next({ name: "login" });
//   } else {
//     console.log("authenticated");
//     next();
//   }
// });

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory("/")
      : createWebHistory("/"),
    routes,
  });
}
