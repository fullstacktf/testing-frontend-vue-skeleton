import { describe, expect, it, vi } from "vitest";
import SignUp from "./SignUp.vue";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    document.pushRouter = vi.fn()
    const user = userEvent.setup();
    render(SignUp);

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await waitFor(() => {
      expect(document.pushRouter).toHaveBeenCalled()
    });
  });
});
