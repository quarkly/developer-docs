---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Let's create a simple Counter component. It will contain a number and a button. By clicking on the button, the number will increase, i.e. count the clicks.

1. Create a new component by clicking the "**+**" icon in the Code Editor and enter the name of the component, for example, `Counter`.

![](/scr/getting-started-create-component.png)

2. After entering the component name, the Code Editor will open, and you will see the default code of the component.

```js
import React from "react";
import atomize from "@quarkly/atomize";

const Counter = (props) => <div {...props}>Say hello Test</div>;

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

3. First, add the import of the `useState` and `useCallback` hooks from the React library, the `Button` primitive, and the `useOverrides` hook:

```js
import React, { useState, useCallback } from "react";

import { Box, Button } from "@quarkly/widgets";
import { useOverrides } from "@quarkly/components";
import atomize from "@quarkly/atomize";
```

4. Then after importing, add override descriptions which will be used later. We'll add only a button description. Let's call it `My Button`, apply the props from the `Button` primitive and specify the caption `color`.

```js
const overrides = {
  "My Button": {
    kind: "Button",
    props: {
      color: "--color-light",
    },
  },
};
```

5. Let's edit the component props. Add a `numb` text field that will contain the number by which the counter will increased.

   To do that, replace the `yourCustomProps` property in the `propInfo` object with a new one:

   ```js
   propInfo: {
     numb: {
       title: 'How much to increment the counter',
       control: 'input',
       type: 'number',
       category: 'Main',
       weight: 1
     },
   }
   ```

6. At the end of the export, add an object with the default value `numb`:

   ```js
   export default atomize(Counter)({
     name: "Counter",
     ...
     propInfo: {
       numb: {
         title: 'How much to increment the counter',
         control: 'input',
         type: 'number',
         category: 'Main',
         weight: 1
       },
     }
   }, {
     numb: 1,
   });
   ```

7. After describing the override list, add the component code:

   - Call the previously imported **useOverrides** hook to be able to apply overrides;
   - Add **useState** to store the counter state. It returns **counter** with the current value and the **setCounter** function to update the value;
   - Create a **onIncrement** function that will increase the counter digit by 1. We added **useCallback** so that the function is created only when **setCounter** changes, not every time the component is updated.
   - Let's edit the component structure:
     - Replace `{...props}` with the new `{...rest}` we got from **useOverrides**;
     - Display the current `{{counter: ${counter}}}`; value
     - Add a **Button** with the "Increment" caption where we call the **override** function with our override name and pass the previously created **onIncrement** function which will be called by click.
     - After displaying the button, you can add `{children}` to be able to add any other component to this one.

   The new component code looks like this:

   ```js
   const Counter = ({ numb, ...props }) => {
     const { override, children, rest } = useOverrides(props, overrides);
     const [counter, setCounter] = useState(0);
     const onIncrement = useCallback(
       () => setCounter((val) => val + numb),
       [setCounter]
     );
     return (
       <div {...rest}>
         <Box margin-right="1em" display="inline">
           {`counter: ${counter}`}
         </Box>
         <Button {...override("My Button")} onClick={onIncrement}>
           Increment
         </Button>
         {children}
       </div>
     );
   };
   ```

8. Press `Ctrl` + `S` or `⌘ (Cmd)` + `S` for MacOS to save the changes.

Congrats! You've created your first component on Quarkly. Now close the code editor, go to the Adding panel, and drag your new component from the list to the page. Check how it works in the preview mode (the "eye" icon in the upper right corner).

Learn more about the structure, component properties, overrides, and much more in the following sections of the documentation.

---
