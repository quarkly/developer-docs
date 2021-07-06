---
id: getting-theme
title: How to Get the Project Theme
sidebar_label: How to Get the Project Theme
---

To get the current project theme, import the `useTheme` hook from the styled-components library and call it in the component.

```js
import { useTheme } from "styled-components";

const theme = useTheme();
```

The `theme` object contains all the theme variables from the right panel which you can use in the component styles. As an example, let's get the `primary` color value:

```js
theme.color.primary;
```

Then you can change the color (make it lighter or darker) or use it directly in a component:

```jsx
<MyComponent color={theme.color.primary} />
```

Which in this case is similar to using a variable:

```jsx
<MyComponent color="--color-primary" />
```

---
