# React Aria / Testing Library bug demo

This repo showcases a bug with the `Button` `onPress` function.

Running the app with `npm run dev` shows two `Menu` components.

Each `Menu` component has a React ARIA `Button` and some text that is either in an open or closed state.

The `Menu` component listens for `pointerdown` events and when a `pointerdown` event happens outside of the component, it closes.

When one menu is open, and a second menu is clicked. The first menu should close. This is tested via the `Menu.test.tsx` file using `userEvent.click`, and this test passes.

However if you try to open both menus, the browser the React ARIA `Button` on the second menu swallows the `pointerdown` event and you end up with both menus being open at the same time.
