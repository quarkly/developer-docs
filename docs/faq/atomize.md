---
id: atomize
title: Styling (Atomize)
sidebar_label: Styling
---

### Why wrap a component in Atomize?

- To integrate third-party components into the Quarkly builder;
- To add styles as component properties;
- To use overrides in HTML elements;
- To apply variables, effects, and breakpoints from the project theme.

### How do I use pseudo classes like hover, focus?

Use the pseudo class name as a prefix:

- Inside JSX markup:

  ```jsx
  <Box color="red" hover-color="green" focus-color="blue" />
  ```

- Inside overrides:

  ```js
  props: {
    color: red,
    hover-color: green,
    focus-color: blue,
  }
  ```

You can also transfer an effects object to Atomize if this effect should be applied to the entire component.

```js
effects: {
  hover: ":hover",
  focus: ":focus",
}
```

See more in the [Effects (pseudo classes)](/components/atomize/adding-effects) section.

### How do I use pseudo elements: before, after?

At the moment, the before and after pseudo elements haven't been added to the builder interface, but you can use them in your code.

- As properties in the code of a component or page:

  ```jsx
  <MyButton before-content="Before" after-content="After" />
  ```

- When creating components with Atomize:

  ```js
  import atomize from "@quarkly/atomize";

  const MyComponent = atomize.div`
    color: red;
  
    &:before {
      content: "Before";
      color: green;
    }
    &:after {
      content: "After";
      color: blue;
    }
  `;
  ```

### What's the difference between exporting Object.assign(Component) and Atomize(Component)?

If a component is wrapped in another component (e.g. `<div {...props}> ... </div>`), exporting **Atomize** will create a React component from it. If a component is wrapped in another component (e.g. `<Box {...props}> ... </Box>`), there is no difference.

### How do I get a project theme?

To get the current project theme, import the `useTheme` hook from the styled-components library and call it in the component.

```js
import { useTheme } from "styled-components";

const theme = useTheme();
```

The `theme` object contains all the theme variables from the right panel which you can use in the component styles.

---
