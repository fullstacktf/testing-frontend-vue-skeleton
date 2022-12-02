import { describe, expect, it, vi } from "vitest";
import SignUp from "./SignUp.vue";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterServiceFake } from "../services/RouterServiceFake.js";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const routerService = new RouterServiceFake();

    vi.spyOn(routerService, "navigateToSignUpSuccess");

    const user = userEvent.setup();
    render(SignUp, {
      props: {
        routerService,
      },
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await waitFor(() => {
      expect(routerService.navigateToSignUpSuccess).toHaveBeenCalled();
    });
  });
});
