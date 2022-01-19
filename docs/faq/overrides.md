---
id: overrides
title: Overrides
sidebar_label: Overrides
---

### Why do I need overrides?

To apply different element styles and properties, which you can change in the builder interface on the "**Styles**" and "**Props**" panels.

See more in the [Overrides](/components/overrides/overview) section.

### Why do I need multiple overrides for one element?

To apply different styles and properties for **different states** in an element. For example, for an open or closed menu, a second list item, etc.

See more in the [How to Create an Override List](/components/overrides/creating-overrides) section.

### How can I get property descriptions of other components through override?

Specify the name of the component from which you want to get the props list in the "**kind**" property.

### Can I specify non-standard builder components in "**kind**"?

The "**kind**" property allows you to get a list of component properties displayed on the builder front panel. You can specify any name, but if a component with that name doesn't exist in the project, the props list for it will be empty.

---
