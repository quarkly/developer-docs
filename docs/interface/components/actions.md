---
id: actions
title: Действия над компонентами
sidebar_label: Действия над компонентами
---

![Context menu for a component](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-context-menu.png?v=2021-05-24T12:56:35.734Z)

You can open the [context menu](/documentation/interface/work-area/context-menu) for a component. The menu contains a list of actions you can do to the component. To open it, mouse over the component and right-click on it.

### Creating a Component on a Page

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-convert.png?v=2021-05-24T12:56:58.982Z)

Choose any element (just one, but it can contain others) on a page, click "..." on the props panel and choose "Convert to Component". In addition, a component can be created with a combination of keys: `Ctrl` + `Alt` + `K` or `⌘ (Cmd)` + `⌥ (Option)` + `K`. After that, a window for entering a component name will appear. Type in a unique name and click "Save".

### Detaching a component (transforming back into an element)

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-detach.png?v=2021-05-24T12:57:18.609Z)

A custom component can be transformed back into the element or group of elements it was created from. To do this, you need to choose only one component, click "..." on the props panel and choose "Detach". This action can also be performed by pressing the combination of keys: `Ctrl` + `Alt` + `B` or `⌘ (Cmd)` + `⌥ (Option)` + `B`.

### Overrides

You can change the styles and content of a parent element as well as all children elements of a custom component. These changes are called overrides.

### Reset Overrides and Reset All Overrides

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-reset-overrides.png?v=2021-05-24T12:57:42.057Z)

If you changed a custom component and then decide to go back to its original version (Master), use the reset option. Choose only one component, click on the "..." button and select "Reset Overrides". If you want to reset the changes for all elements, both parent and children, click "Reset All Overrides".

### Push to Master and Push All to Master

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-push-to-master.png?v=2021-05-24T12:57:53.219Z)

If you changed a custom component and would like to apply the change to all copies of this component, use the command for sending changes to Master. To do this, choose only one component, click on the "..." on the props panel and choose "Push to Master". If you want to send the changes of a parent element and all children elements to Master, click "Push All to Master".

**Important!** When you use "Push to Master" and "Push All to Master", all changed styles in the copies will be preserved (those that contain overrides). The styles will be changed only in those copies that you didn’t edit.

### Save as New Component

![](https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-components-create-new.png?v=2021-05-24T12:58:07.004Z)

You can create a new custom component using the existing custom component. To do this, you need to choose only one component, click "..." on the props panel and select "Save as New Component".

---
