import "./assets/main.css";
import { createSSRApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "./plugins/vuetify";
import { createRouter } from "./router/index";
import { createPinia } from "pinia";

export function createApp() {
  const app = createSSRApp(App);
  const vuetify = createVuetify();
  app.use(vuetify);
  const pinia = createPinia();
  app.use(pinia);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
