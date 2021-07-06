---
id: getting-styles
title: How to Get Component Styles
sidebar_label: How to Get Component Styles
---

You may need to get the current component styles while it is running, for example, when an event happens.

To get CSS styles for a component, call the `getComputedStyle` function where you want to transfer the desired HTML element. As a result, you get a `styles` object which contains all the styles applied to the component.

Let's take, for example, the `Link` component from the `@quarkly/widgets` library and get its color when mousing over it:

```jsx
const onEnterEvent = (e) => {
  const styles = getComputedStyle(e.target);
  console.log(styles.color);
};

return (
  <Link onMouseEnter={onEnterEvent} {...props}>
    Blue link
  </Link>
);
```

**Note:** Use the `getComputedStyle` function only to get styles added from the builder interface or third-party libraries. The styles you added in a component can be retrieved from the `e.target.style` object.

Please also note that the `getComputedStyle` function returns the object with the standard style names written with `background-color` hyphen, while the `e.target.style` object uses the names as `backgroundColor` as if you were transferring them in any component.

---
