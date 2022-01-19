---
id: structure
title: Component Structure
sidebar_label: Component Structure
---

First, let's have a look at the simple component structure.

As an example, let's create a new component called "**MyComponent**". It just shows the text on the page and consists of one `div` element. You can apply any styles from the builder to this component. It also has a title and description.

```js
import React from "react";

const MyComponent = (props) => {
  return <div {...props}>Say hello MyComponent</div>;
};

export default atomize(MyComponent)({
  title: "Component Title",
  description: {
    en: "Component Description",
  },
});
```

Let's take a look at a few basic points when creating components:

A component is a simple JavaScript module, and you can create components that will only store or read something. You don't have to use React inside the component to do this.

You need to use React if your component is going to display something on the page or create other React components. To do this, first connect the React library:

```js
import React from "react";
```

If your component uses React, it should return a single parent element where the `{...props}` component parameters are transferred. An object with the **props** parameters contains styles and parameters of the component which the user can change in the builder on the _Styles_ and _Props_ panels.

The object also includes all the necessary builder properties for the component. Note that in the component, data from **props** must be transferred before overrides if they are used.

A parent element (in our case, `<div {...props}>`) can contain any number of child elements, other components, etc. In the following sections, we'll show different ways of filling a component.

Regardless of the component purpose, it must be exported. To do this, add `export default` to the end of the file with the final component object.

Components that use React can be exported in two ways:

1. If the parent component is imported from Quarkly or was previously created with Atomize (e.g. `<Box {...rest}>`), you can export the object as it is by adding a header, description, etc.:

   ```js
   export default Object.assign(MyComponent, {
     title: "Component Title",
     description: {
       en: "Component Description",
     },
   });
   ```

2. In other cases when you used a regular HTML element (e.g. `<div {...rest}>`) as a parent, you should convert it into a component using Atomize before exporting as in the example above:

   ```js
   export default atomize(MyComponent)({
     title: "Component Title",
     description: {
       en: "Component Description",
     },
   });
   ```

When exporting, you can specify the component name and description in several languages. A full set of languages from i18n (ISO 639) is supported.

---
