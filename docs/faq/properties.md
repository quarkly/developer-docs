---
id: properties
title: Properties
sidebar_label: Properties
---

### How do I set the default value for a component property?

Create an object called "**defaultProps**" where you specify the property name and its default value.<br /> Then, when exporting the component, transfer this object.

```js
const defaultProps = {
    propName: 'Default value',
};

...

export default Object.assign(MyComponent, {
    defaultProps,
});
```

### How do I group the property descriptions of a component?

Specify the "**category**" parameter with the group name you want in the property description.<br /> If such a name doesn't exist, a new group will be created.

```js
const propInfo = {
  propName: {
    title: "Property Title",
    category: "Category Name",
  },
};
```

---
