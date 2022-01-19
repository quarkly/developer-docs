---
id: process-events
title: How to Process Events
sidebar_label: How to Process Events
---

In this section, you will learn how to describe the component behavior when an event happens. For example, when mousing over or clicking on a component.

To add interception of an event to a component, add the event name and the function as a prop that will process it, for example:

```jsx
const onEnterEvent = e => console.log('Cursor hovers over element ', e.target);
const onLeaveEvent = e => console.log('Cursor doesn't hover over element ', e.target);

return (
  <Box
    onMouseEnter={onEnterEvent}
    onMouseLeave={onLeaveEvent}
    {...props}
  >
    Component sensitive to cursor hover
  </Box>
);
```

In this example, we added two custom functions: `onEnterEvent` and `onLeaveEvent` — which display a message in the console and are called when the `onMouseEnter` and `onMouseLeave` events happen respectively. You'll learn how to change the component state, styles, etc. in the following sections.

Each event returns an object with data, which we called "e". There you can get the type of the event (`e.type`), the element it was applied to (`e.target`), and other less frequently used data.

Almost any event can be interrupted by calling `e.preventDefault()` in its function. For example, to prohibit copying text, hover over an element or a form.

---
