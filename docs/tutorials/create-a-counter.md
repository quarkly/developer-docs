---
id: create-a-counter
title: Create a Counter
sidebar_label: Create a Counter
---

Create a component and call it "**Counter**".

This is how the component default code looks:

```js
import React from "react";
import atomize from "@quarkly/atomize";

const Counter = (props) => <div {...props}>Say hello Counter</div>;

export default atomize(Counter)({
  name: "Counter",
  effects: {
    hover: ":hover",
  },
  normalize: true,
  mixins: true,
  description: {
    // paste here description for your component
    en: "Counter — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input",
    },
  },
});
```

You can find everything here: imports, exports, and some kind of constant. Actually, it's pretty simple. Let's have a look at each line:

```js
import React from "react";
```

Import the React library into this component. To make use of React, import it into a component file.

```js
import atomize from "@quarkly/atomize";
```

Import the Atomize library to use a simplified syntax to design components.

```js
const Counter = (props) => <div {...props}>Say hello Counter</div>;
```

Create the Counter constant giving it the component name. In fact, it's our component.  Let's create a React component using "const". Our Counter component is based on a function. A function usually receives something and gives something away. In our case, it takes the component settings `props` and returns `<div {...props}>Say hello Counter</div>` which is a div HTML element with text inside. As you can see, it's not that difficult.

```js
export default atomize(Counter)({
```

When you place the component on a page, the system should understand what you want to show/render and what you don't from that file. So this line is about what you want to export from the file when someone accesses it. In our case, we export our component, not simple but wrapped in Atomize with additional parameters in curly brackets:

```js
name: "Counter",
```

The component name shown on the Props panel

```js
effects: {
  hover: ':hover'
},
```

What effects will the component have, by default only hover (you can change the component design when you mouse over it).

```js
normalize: true,
mixins: true,
```

These are technical parameters which we won't consider at this point.

```js
description: {
  // paste here description for your component
  en:
    'Counter — my awesome component',
},
```

Component description

```js
propInfo: {
  // paste here props description for your component
  yourCustomProps: {
    control: "input";
  }
}
```

Description of the props that will be on the panel of the input field type.

Props panel screenshot

We're done with the code. Now let's drag the component to the page. Close the Code Editor. First, let's add the Section component from the Quarkly UI tab to the page and drag our Counter into it. Section is necessary to separate our component from the page border.

Our component looks like a "**Say hello Counter**" inscription on the page.

Click on the component, and on the right panel, find the **Typography** section and Color in it, and enter "**red**" in the input field. As you can see, you can design the component on the right panel. That's because we wrapped the component in Atomize.

Let's move on and add a few lines to the component to make it a click counter.

#### Let's create a counter

The click counter will work as follows: there will be 0 on the left and a button on the right. When clicking on the button, the number will increase by 1, i.e. count clicks. Let's start.

Change line

```js
import React from "react";
```

into

```js
import React, { useState, useCallback } from "react";
```

Here, apart from the React itself, we'll also import two hooks (functions) that will help us a lot. We'll tell you about them later.

Under the line

```js
import atomize from "@quarkly/atomize";
```

Let's add an import of the Button primitive which will be our button.

```js
import { Button } from "@quarkly/widgets";
```

And import the **useOverrides** hook below. This is a special feature that allows you to select and design subelements of the component on the page: the number and the button. You must set it explicitly because Quarkly doesn't know what you will select and style.

```js
import { useOverrides } from "@quarkly/components";
```

Now let's change the line

```js
const Counter = (props) => <div {...props}>Say hello Counter</div>;
```

into (No worries!)

```js
const Counter = (props) => {
  const { override, children, rest } = useOverrides(props, {}, {});
  const [counter, setCounter] = useState(0);
  const onIncrement = useCallback(
    () => setCounter((val) => val + 1),
    [setCounter]
  );
  return (
    <div {...rest}>
      {`counter: ${counter}`}
      <Button {...override("btn")} onClick={onIncrement}>
        Increment
      </Button>
      {children}
    </div>
  );
};
```

Let's see what's going on here line by line

```js
const Counter = props => {
```

The curly bracket at the end indicates that the next line will be a multi-line expression

```js
const { override, children, rest } = useOverrides(props, {}, {});
```

This is a call to the useOverrides hook, so that you can edit the component and its subcomponents on the page. The hook returns the following data:

- `override` is a function that can be used to define the editable parts of a component through the builder (its UI)
- `children` is a component you may want to nest into your component
- `rest` is the properties that were transferred to the component from outside (when using it in JSX)

```js
const [counter, setCounter] = useState(0);
```

To use the counter, save its state. For example, if we set the initial value to 0 and then add 1, the result will be 1. When we add another 1, we expect to see 2, but the result will still be 1. Since we haven't saved the previous result, we add 1 to the original value (i.e. 0).

So `useState` is necessary to store and change this state. Counter saves the state, and setCounter sets the new state. `useState` controls all this and takes the original value (0) as a parameter. We're done here. Let's move on.

After creating a function that controls the counter state, we need to create a function — a button event handler (onClick). To do this, set a new function — onIncrement and call setCounter in its body. Each time the setCounter function is called, the counter value will change and the component will re-render to display the new number. Re-rendering in this case means a new call to the component function (the code within that function is reused). The handler as part of the component will be re-created, which additionally loads the browser. This is not crucial for our example, but if a more complex component is redrawn, it could lead to lags.

To prevent the handler function from creating a new one every time the component is rendered, we use the useCallback hook. We transfer the event handler into this hook as the first argument and a handler dependencies array as the second argument. Dependencies in this case are all the functions and variables mentioned above and used within the event handler. Specifically the setCounter function.

Here we increase the counter value in the object state by 1. The setCounter function sets the new state which is equal to the old state + 1 (val =&gt; val + 1). useCallback is necessary for optimization, especially when we often change the value that depends on the previous one. Transfer the so-called dependencies as the second useCallback function argument, in our case, it's setCounter. This tells useCallback not to call setCounter again until the setCounter changes inside. In our case, in doesn't change.

```js
return (
```

Here we specify what the component will actually show

```js
<div {...rest}>
```

The div tag with the parameters from rest that we get from the useOverrides hook. Note that all the styles, content, and any possible children we get from the useOverrides hook which collects all the changes we make on the page. Next, we spread it all over our components. In particular, the styles come into this div container.

```js
{
  `counter: ${counter}`;
}
```

It's not just text inside the div, but an expression, so we wrap it in curly brackets and backticks. Why an expression? There is text "counter": and there is a variable from our state counter. Wrap the variable in another $&#123;counter&#125;. That's the syntax, which we can't do anything with.

```js
<Button
```

Next comes the button that will control the number addition.

```js
{...override('btn')}
```

Here, set the slot name for useOverride so that we can select that particular button on the layers under its unique name and style it.

```js
onClick={onIncrement} >
```

`onClick` is the button event that is triggered when you right-click on it. There are a lot of these kinds of events, so let's come back to that later. The important thing here is that we call the **onIncrement** function at this event.

```js
Increment;
```

This is button text

```js
</Button>
```

The button tag is closed

```js
{
  children;
}
```

This is an indication for `useOverride` that if you move new items into a component, they will appear here.

Now close the `div` tag, `return`, and the component itself.

Save and go to the preview mode (the eye in the top right corner)

The button works and the counter counts clicks.

Let's focus on the events:

- Replace `onClick` with `onMouseOver` — now the number of mouse hovers on the button is counted instead of clicks.
- Replace with `onMouseMove` — now mouse movements inside the button are counted.
- Replace with `onBlur` — now the focus loss is counted by clicking on the button first and then outside of it.

---
