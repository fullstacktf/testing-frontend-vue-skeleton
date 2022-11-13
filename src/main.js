import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./reset.css";
import "./main.css";
import App from "./App.vue";
import SignUp from "./pages/SignUp.vue";
import Success from "./pages/Success.vue";
import { createDependenciesReal } from "./factories/CreateDependenciesReal.js";

const routes = [
  { path: "/", component: SignUp },
  { path: "/success", component: Success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const dependencies = createDependenciesReal({ router });

createApp(App).use(router).provide("dependencies", dependencies).mount("#app");
