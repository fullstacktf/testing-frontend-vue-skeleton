import { RouterService } from "./RouterService.js";

export class RouterServiceVueRouter extends RouterService {
  constructor(router) {
    super();
    this.router = router;
  }

  navigateToSignUpSuccess() {
    this.router.push("/success");
  }
}
