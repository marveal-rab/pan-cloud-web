import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import vuetify from "./plugins/vuetify";
app.use(vuetify);

import router from "./router/index";
app.use(router);

app.mount("#app");
