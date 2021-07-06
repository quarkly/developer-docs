---
id: using-breakpoints
title: How to Use Breakpoints
sidebar_label: How to Use Breakpoints
---

Breakpoints are used when you want to apply different styles to different devices. You can set up a list of breakpoints for which styles will be applied in the project theme in the Quarkly builder.

To apply styles to a breakpoint, specify its name as a prefix to any CSS property. For example, let's apply different **colors** for the `lg` and `md` breakpoints:

```jsx
<MyButton lg-color="orange" md-color="yellow" />
```

You can also combine effects with breakpoints:

```jsx
<MyButton lg-hover-color="cyan" md-hover-color="teal" />
```

---
