---
id: using-overrides
title: How to Use Overrides in a Component
sidebar_label: How to Use Overrides in a Component
---

To use the created overrides in a component, call the previously imported `useOverrides` hook.

It gets the component `props` (if the component gets any custom properties, they can be excluded) and the previously described `overrides` object. If necessary, you can transfer the `defaultProps` object if the overrides depend on the component's default properties.

It returns the `override` function to apply overrides to the component, the `children` array with children elements and all other properties in the `rest` object. If your component doesn't contain any child elements, you don't need to get `children`. The call to `useOverrides` looks like this:

```js
const MyComponent = props => {
  const { override, children, rest } = useOverrides(props, overrides, defaultProps);

  ...
}
```

Now you can call the `override` function in the desired component. Let's take a look at the following example in more detail:

```jsx
return (
  <Box {...rest}>
    <Link
      some-property-name="value"
      onPointerDown={onOpenFunc}
      {...override("My Link")}
    >
      {override("My Link").children || "Default Text"}
    </Link>
    {children}
  </Box>
);
```

**Important!** When creating a new component, you may notice that the `props` object is transferred to the parent component. The useOverrides hook, in turn, returns the `rest` object which should be transferred instead of `props`.

In the example above, we called `override` in the **Link** component after transferring all other styles and parameters. It's necessary to ensure that the changes in the builder cover the parameters described in the component. If you want to forbid the user to change any parameter or style (for example, the color of the error display), add it after calling `override`.

The contents of the **Text**, **Link**, and **Button** components are stored in the `children` component of the specified override, and the child elements of the main component are still available in the `children` array which returns `useOverride`.

When calling the `override` function, you can transfer several names, for example to style different states. The currently active states are available on the right panel and all changes will be applied to the user-selected override name.

The `kind` prop in the `overrides` object can only be specified for the first name, and it will be applied to all subsequent names automatically.

```js
{...override('MyLink')}
{...override('MyLink', 'MyLink HomePage')}
{...override('MyLink', 'MyLink HomePage', isActive && 'MyLink :active')}
{...override('MyLink', 'MyLink HomePage', `MyLink ${status}`)}
```

In the examples above, we showed different options for adding an override list to a component.

This way, you can style all "**MyLink**" links in the same way, select the "**MyLink HomePage**" link and, by changing the values of the `isActive` or `status` variables, add unique styles for all active links.

If several override names are active at the same time, each next name adds new or overlaps existing styles from the previous one.

---
