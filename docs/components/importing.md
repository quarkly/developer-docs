---
id: importing
title: How to Import Third-Party Components
sidebar_label: How to Import Third-Party Components
---

You can use existing components and NPM modules in your component. In other words, you can:

- **Import widgets (primitives) from the builder** from the '@quarkly/widgets' module:

  ```js
  import { Box, Text } from "@quarkly/widgets";
  ```

- **Import complex components from the builder** from the '@quarkly/components' module:

  ```js
  import { Menu } from "@quarkly/components";
  ```

- **Import existing custom components** from the catalog of the current project as follows:

  ```js
  import MyComponent from "./MyComponent";
  ```

  Where `MyComponent` is the component name.

- **Import modules of other users from NPM** by adding a simple import. The module will be automatically installed and written as a project dependency:
  ```js
  import Particles from "react-particles-js";
  ```

---
