---
id: overview
title: Component Parameters
sidebar_label: Overview
---

You can add and use custom component parameters that will be available in the builder on the Props panel.

In the following example, we added the `someProp` parameter to our component and got its current value. Note that if the user changes it in the builder on the Props panel, it will be automatically changed in the component.

```jsx
const MyComponent = ({ someProp, ...props }) => {
  return <div {...props}>Current someProp value: {someProp}</div>;
};
```

###### &nbsp;

#### Read more on this topic

- ###### [PropInfo Object](/components/properties/propinfo-object)
- ###### [Default Props](/components/properties/default-props)

---
