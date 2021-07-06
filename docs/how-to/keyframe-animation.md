---
id: keyframe-animation
title: How to create keyframe animations (keyframes)
sidebar_label: How to create keyframe animations
---

In the current version, it is possible to animate only a custom code component using **animation** and **keyframes**.

Here’s a step-by-step guide on how to apply rotating animation to an element:

1. Create a code component. Click on the + button in the Project section of the Components tab.

2. Import dependencies from styled-components into the component:

   ```js
   import MyComponent from "./MyComponent";
   ```

3. Create a rotate variable with keyframes and styles:

   ```js
   const rotate = keyframes`
      0% {
        transform: rotate(0deg);
        background-color: #ff4400;
      }
      50% {
        transform: rotate(180deg);
        background-color: #000000;
      }
      100% {
        transform: rotate(360deg);
        background-color: #ff4400;
      }
    `;
   ```

4. Create a component using styled-components:
   ```js
   const Rotate = styled.div`
     display: inline-block;
     padding: 2rem 1rem;
     border-radius: 10px;
     font-size: 1.2rem;
     background: red;
   `;
   ```
5. Add the animation property to the rotate variable:

   ```js
   const Rotate = styled.div`
     animation: ${rotate} 2s linear infinite;
     display: inline-block;
     padding: 2rem 1rem;
     border-radius: 10px;
     font-size: 1.2rem;
     background: red;
   `;
   ```

Here’s the whole component code:

```js
import atomize from "@quarkly/atomize";

// Import the keyframes
import styled, { keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: #ff4400;
  }
  50% {
    transform: rotate(180deg);
    background-color: #000000;
  }
  100% {
    transform: rotate(360deg);
    background-color: #ff4400;
  }
`;

// Here we create a component that will rotate everything we with an interval of 2 seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background: red;
`;

export default atomize(Rotate)({
  name: "Rotate Animation",
  effects: {
    hover: ":hover",
  },
  normalize: true,
  mixins: true,
  description: {
    // paste here the description for your component
    en: "Rotate Animation Component",
  },
  propInfo: {
    // paste here the props description for your component
    yourCustomProps: {
      control: "input",
    },
  },
});
```

---
