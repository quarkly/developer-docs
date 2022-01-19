---
id: general
title: General
sidebar_label: General
---

### What are "components" and why do I need them?

Components are elements or groups of elements with specific property values and content (e. g., a block of images, text, and buttons). They speed up and simplify the design and make it complete.

### How do I create a custom component?

To create a new component:

- Method 1: Click the "**+**" icon on the Adding panel under "**Components**"
- Method 2: Open the add component modal window, go to "**Components**", and click "**Create for Project**"

To create a new component from an existing element on the page:

- Method 1: Select the element on the page, call the context menu and select "**Create new Component**"
- Method 2: Select the element on the Layers panel, call the context menu, and select "**Create new Component**"

### How do I edit my component?

To edit the component code:

- Method 1: Click "**&lt;&gt;**" on the Adding panel under "**Components**"
- Method 2: Open the modal window of the component on the page and click "**Edit Code**"

### Can I add one component inside the other?

To add a component inside another one in the code, import it and paste it into the desired JSX place. To add the ability to add a component into another one on the page, add the children property to the desired JSX place.

```js
import { Box } from '@quarkly/widgets';
import ChildComponent from './ChildComponent';

...

const ParentComponent = ({ children, ...props }) => {
    return (
        <Box {...props}>
            <ChildComponent />
            {children}
        </Box>
    )
};
```

### Can I import a component from the NPM?

Yes, add "**import**" to the component code, and it will be installed from NPM to the project automatically.

```js
import Particles from "react-particles-js";
```

### How do I get the values from the project theme?

To get the current project theme, import the `useTheme` hook from the styled-components library and call it in the component.

```js
import { useTheme } from "styled-components";

const theme = useTheme();
```

The `theme` object contains all the theme variables from the right panel which you can use in the component styles.

---
