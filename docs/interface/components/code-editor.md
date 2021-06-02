---
id: code-editor
title: Компоненты и Code Editor
sidebar_label: Компоненты и Code Editor
---

![Creating a Component in the Code Editor](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-create-plus.png?v=2021-05-24T12:58:21.884Z)

To create a code component, click on the "**+**" button. You should be familiar with JavaScript and React.js. Once you’ve chosen the component name, the code editor will open, and you’ll see a default component. Code components allow:

-   Setting up any kind of content.
-   Styling content however you like.
-   Configuring any logic.
-   Connecting NPM dependencies.
-   Connecting primitives and Quarkly UI components.
-   Defining props (properties) for a component.
-   Connecting to any external databases or API.

To edit a component in the code editor, click on the "**&lt;&gt;**" button.

### How to connect an NPM module in components

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-import-npm.png?v=2021-05-24T12:58:40.219Z)

To connect a module, just import it into the component, as if it had been already installed.

Example code:

```
import Particles from "react-particles-js";
```

### Importing atomize

Atomize is a library for creating Quarkly components.

To make your React component work, you need to wrap it and define the object with the following configuration:

```
const MyComponent = props => <div {...props}>Say hello MyComponent</div>

export default atomize(MyComponent)({
  name: "MyComponent",
  effects: {
    hover: ":hover"
  },
  normalize: true,
  mixins: true,
  description: {
    // paste here the description for your component
    en:
      "MyComponent — my awesome component",
  },

  propInfo: {
    // paste here the props description for your component
    yourCustomProps: {
      description: {en: 'test'},
      control: "input"
    }
  }
});
```

Component configuration fields:

-   **Effects** – defines browser pseudo-classes (hover, focus, etc).
-   **Description** – defines the component description that shows up when hovering the mouse cursor over its name.
-   **PropInfo** – configures controls that will be displayed on the right panel (props tab).

### How to display required properties on the props panel

Here’s how to define properties that will be displayed on the right panel (props tab):

```
propInfo: {
  yourCustomProps: { // property name
    description: { en: "test" }, // locale-specific description
    control: "input" // control type
  }
}
```

Possible control types:

-   input
-   text-area
-   select
-   color
-   image
-   font
-   shadow
-   transition
-   transform
-   filter
-   background
-   checkbox-icon
-   radio-icon
-   radio-group
-   checkbox

### How to import primitives into your custom component

```
import { PrimitiveComponentName } from "@quarkly/widgets";
```

### How to import components from Quarkly UI into your custom component

```
import { QuarklyUIComponentName } from "@quarkly/components";
```

### How to import your components into other custom components you have

```
import MyComponent from "./MyComponent";
```

---
