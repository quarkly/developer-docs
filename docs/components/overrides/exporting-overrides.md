---
id: exporting-overrides
title: How to Export a Component with Overrides
sidebar_label: How to Export a Component with Overrides
---

When exporting a component that uses overrides, it's mandatory to transfer the previously created object to `overrides`.

```js
export default Object.assign(MyComponent, {
  title: "My Component Title",
  overrides,
});
```

---
