import { describe, expect, it, vi } from "vitest";
import SignUp from "./SignUp.vue";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createDependenciesFake } from "../factories/CreateDependenciesFake.js";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const dependencies = createDependenciesFake();

    vi.spyOn(dependencies.routerService, "navigateToSignUpSuccess");

    const user = userEvent.setup();
    render(SignUp, {
      props: {
        authService: dependencies.authService,
        routerService: dependencies.routerService,
      },
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    expect(
      dependencies.routerService.navigateToSignUpSuccess
    ).toHaveBeenCalled();
  });
});
