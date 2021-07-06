---
id: creating-component
title: Create Simple Component
sidebar_label: Create Simple Component
---

To create a new component of an HTML element or other component, connect the `atomize` library:

```js
import atomize from "@quarkly/atomize";
```

Atomize is a wrapper over styled-components and has a similar API. Just call the method using the name of the desired HTML element, for example, create a new element from a `button`:

```js
const MyButton = atomize.button();
```

You can also create a new component from an existing one:

- An example of creating a component from an imported one:

  ```js
  import { Button } from "@quarkly/widgets";

  const MyButton = atomize(Button);
  ```

- An example of creating a component from an existing one:

  ```js
  const Button = ({ children }) => {
    // some logic here
    return <button>{children}</button>;
  };

  const MyButton = atomize(Button);
  ```

- As a result, we get a React component that can accept any CSS style or parameter, for example:

  ```js
  <MyButton color="red" />
  ```

---
