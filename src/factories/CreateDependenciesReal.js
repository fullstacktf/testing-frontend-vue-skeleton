import { createDependencies } from "./CreateDependencies.js";
import { AuthServiceApi } from "../services/AuthServiceApi.js";
import { RouterServiceVueRouter } from "../services/RouterServiceVueRouter.js";

export function createDependenciesReal({ router }) {
  return createDependencies({
    authService: new AuthServiceApi(),
    routerService: new RouterServiceVueRouter(router),
  });
}
