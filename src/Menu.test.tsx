import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from "./Menu";
import { it, expect } from 'vitest';

it('does not reflect reality', async () => {
  const user = userEvent.setup();

  render(
    <div>
      <Menu text="one" />
      <Menu text="two" />
    </div>
  );

  const menuOne = screen.getByRole("button", { name: "one" });
  const menuTwo = screen.getByRole("button", { name: "two" });

  // Both menus should be closed initially
  expect(screen.queryByText("Menu one is open!")).toBeFalsy();
  expect(screen.queryByText("Menu two is open!")).toBeFalsy();

  await user.click(menuOne);

  // Menu one should be open and menu two should be closed
  expect(screen.queryByText("Menu one is open!")).toBeTruthy();
  expect(screen.queryByText("Menu two is open!")).toBeFalsy();

  await user.click(menuTwo);

  // Menu one should be closed and menu two should be open
  expect(screen.queryByText("Menu one is open!")).toBeFalsy();
  expect(screen.queryByText("Menu two is open!")).toBeTruthy();
});
