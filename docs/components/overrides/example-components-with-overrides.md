---
id: example-components-with-overrides
title: Example. Components with overrides
sidebar_label: Example. Components with overrides
---

To summarize the current section, let's create a `MyButton` component consisting of a link, an icon, and text. Let's add one `src` parameter to the Props panel and add overrides to the nested components:

```js
import React from "react";

import { useOverrides } from "@quarkly/components";
import { Link, Icon, Text } from "@quarkly/widgets";

const overrides = {
  "Button Icon": {
    kind: "Icon",
    props: {
      category: "md",
      icon: "MdInfoOutline",
    },
  },
  "Button Text": {
    kind: "Text",
    props: {
      children: "Get Info",
    },
  },
};

const MyButton = ({ src, ...props }) => {
  const { override, rest } = useOverrides(props, overrides);
  return (
    <Link src={src} {...rest}>
      <Icon {...override("Button Icon")} />
      <Text {...override("Button Text")} />
    </Link>
  );
};

const propInfo = {
  src: {
    title: "SRC",
    control: "input",
    weight: 1,
  },
};

const defaultProps = {
  src: "default_src_property",
};

export default Object.assign(MyButton, {
  title: "My Button Component",
  propInfo,
  defaultProps,
  overrides,
});
```

In this example, we created an `overrides` object where we specified the list of all the overrides in the component. Then, inside the component, we called `useOverrides`. We transferred the `rest` object to the end of the parent component and called the `override` function in each child component with the correct override name. When exporting the component, don't forget to transfer the previously created `overrides` object.

---
