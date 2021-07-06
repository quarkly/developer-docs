---
id: default-props
title: Default Component Properties
sidebar_label: Default Props
---

After describing the component parameters, you can specify default values for them. To do this, create a defaultProps object where the properties are the names of the component parameters and the values are the selected defaults.

For example:

```js
defaultProps: {
  someProp: 'opt1',
}
```

**Important!** When exporting a component, you need to transfer the `propInfo` and `defaultProps` objects you created before:

```js
export default Object.assign(MyComponent, {
  title: "My Component",
  propInfo,
  defaultProps,
});
```

---
