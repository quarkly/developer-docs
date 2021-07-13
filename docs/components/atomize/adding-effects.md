---
id: adding-effects
title: How Do I Add Effects (pseudo classes)
sidebar_label: How Do I Add Effects
---

Effects define element states that are changed by user actions. The following effects are available:

- `hover` — applied when the cursor is within an element;
- `focus` — applied when the element receives focus. For example, for a text field, applying focus means that the cursor is set in the field and you can enter text into it;
- `active` — applied when the user activates an element. For example, a link becomes active when you click it;
- `link` — applied to unvisited links;
- `visited` — applied to visited links.

**Important!** The browser stores a history of visits, so the link can be marked as visited if it has been used.

For your component to be able to handle different effects, you should transfer an object with a list of desired effects when you create the component. Key (e.g. `hover`) is a prefix in the property name, and the value (e.g. `:hover`) is a CSS selector.

An example of how to create a component from an HTML element:

```js
const MyButton = atomize.button({
  effects: {
    hover: ":hover",
    focus: ":focus",
  },
});
```

An example of how to create a component from an HTML element:

```js
const MyButton = atomize(Button)({
  effects: {
    hover: ":hover",
    focus: ":focus",
  },
});
```

Now, if you add a hover or focus prefix to any CSS property, it will be applied to a specific effect:

```jsx
<MyButton color="red" hover-color="green" focus-color="blue" />
```

As a result, the button color will be **red**. When the user hovers over the component, the color will change to **green**. When they set the focus on it, the color will change to **blue**.

#### Effects (pseudo classes) in primitives:

The list of effects available **in all** primitives:

- hover: ":hover"
- firstChild: ":first-child"
- lastChild: ":last-child"
- onlyChild: ":only-child"
- firstOfType: ":first-of-type"
- lastOfType: ":last-of-type"
- onlyOfType: ":only-of-type"
- before: ":before"
- after: ":after"

In the **Box** and **List** primitives, the effect below is also available::

- empty: ":empty"

The following effects are also available in the **Text** and **Link** primitives:

- firstLine: "::first-line"
- firstLetter: "::first-letter"
- selection: "::selection"
- empty: ":empty"

The following effects are also available in the **Button** and **Input** primitives:

- focus: ":focus"
- active: ":active"
- disabled: ":disabled"

The following effects are also available in the **Input** primitive:

- required: ":required"
- placeholder: "::placeholder"
- invalid: ":invalid"

---
