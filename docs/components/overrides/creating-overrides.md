---
id: creating-overrides
title: How to Create an Override List
sidebar_label: How to Create an Override List
---

The list of all overrides used in the component is described in the object called `overrides`. The object properties correspond to custom override names and can contain the `kind` and `props` fields. You decide which components and states can be changed.

For example, let's add an override called "**My Link**" for a **Link** component and set it the `src` property:

```js
const overrides = {
  "My Link": {
    kind: "Link",
    props: {
      src: "#",
    },
  },
};
```

The `kind` property allows you to use a set of properties from another component. You must specify the system name of a standard or custom existing component in it. Then the properties of this component will be available on the Props panel in the builder. For example, in the example above, we created a custom component with a link and now we want to add properties to it from the **Link** component. The `kind: 'Link'` property is added automatically.

In the `props` object, you can specify a list of CSS styles and any props you'd like to transfer to the component with this override name.

To describe a property, just set the property name and value, as in the `src` example.

And the CSS styles can be described in different ways:

- standard description<br/>`color: '#212121'`
- aliases from the atomize library<br/>`c: '#212121'`
- variables from the project theme<br/>`color: '--color-dark'`<br/>`color: '--dark'`
- breakpoints from the project theme<br/>`'md-color': '#212121'`
- state effects<br/>`'link-color': '--primary'`<br/>`'focus-color': '--secondary'`<br/>`'hover-color': '--orange'`<br/>`'active-color': '--red'`<br/>`'visited-color': '--indigo'`

So the object with the description of overrides might look like this:

```js
const overrides = {
  "My Link": {
    kind: "Link",
    props: {
      color: "--primary",
      "hover-color": "--secondary",
      font: "--base",
      "md-font": "--lead",
      src: "#",
    },
  },
};
```

---
