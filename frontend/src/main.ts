import {createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import router from "./router";
import cacheService from "./service/cacheService";




const app = createApp(App)
  app.config.globalProperties.variable = true;
  app.use(router)
  app.mount("#app");
