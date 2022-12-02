import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./reset.css";
import "./main.css";
import App from "./App.vue";
import SignUp from "./pages/SignUp.vue";
import Success from "./pages/Success.vue";
import { RouterServiceVueRouter } from "./services/RouterServiceVueRouter.js";

const routes = [
  {
    path: "/",
    component: SignUp,
    props: () => {
      const routerService = new RouterServiceVueRouter(router);

      return { routerService };
    },
  },
  { path: "/success", component: Success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
