import { describe, expect, it, vi } from "vitest";
import SignUp from "./SignUp.vue";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { AuthServiceFake } from "../services/AuthServiceFake.js";
import { RouterServiceFake } from "../services/RouterServiceFake.js";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const authService = new AuthServiceFake();
    const routerService = new RouterServiceFake();

    vi.spyOn(routerService, "navigateToSignUpSuccess");

    const user = userEvent.setup();
    render(SignUp, {
      props: {
        authService,
        routerService,
      },
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    expect(routerService.navigateToSignUpSuccess).toHaveBeenCalled();
  });
});
