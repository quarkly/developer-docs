---
id: example-imported-components
title: Example. Imported components
sidebar_label: Example. Imported components
---

If you have imported a previously created component with overrides into another component, you must call the `overrides` function on the imported component to be able to edit it in the builder.

As an example, let's create a new component called **MyForm** and import the previously created **MyButton** component:

```js
import React from "react";

import { useOverrides } from "@quarkly/components";
import { Box, Input } from "@quarkly/widgets";

import MyButton from "./MyButton";

const overrides = {
  "Form Input": {
    kind: "Input",
  },
  "Form Button": {
    kind: "MyButton",
    props: {
      src: "override_src_property",
    },
  },
};

const MyForm = (props) => {
  const { override, rest } = useOverrides(props, overrides);

  return (
    <Box {...rest}>
      <Input {...override("Form Input", "First Input")} />
      <Input {...override("Form Input", "Second Input")} />
      <MyButton {...override("Form Button")} />
    </Box>
  );
};

export default Object.assign(MyForm, {
  title: "My Form",
  overrides,
});
```

We added an `override` to the imported **MyButton** component in the `overrides` object. In the `kind` property, similarly to other components, we specified the name of the imported component to display its parameters on the Props panel. In the `props` object, you can also transfer any props to the component including those that appear on the Props panel, for example `src`.

---
