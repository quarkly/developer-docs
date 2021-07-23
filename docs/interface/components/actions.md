---
id: actions
title: Actions on Components
sidebar_label: Actions on Components
---

![Context menu for a component](/scr/components-context-menu.png)

You can open the [context menu](/interface/left-panels/context-menu) for a component. The menu contains a list of actions you can do to the component. To open it, mouse over the component and `right-click` on it.

### Creating a Component on a Page

![Creating a Component on a Page](/scr/components-converting.png)

Choose any element (just one, but it can contain others) on a page, click "**...**" on the props panel and choose "**Convert to Component**". In addition, a component can be created with a combination of keys: `Ctrl` + `Alt` + `K` or `⌘ (Cmd)` + `⌥ (Option)` + `K`. After that, a window for entering a component name will appear. Type in a unique name and click "**Save**".

### Detaching a Component

![Detaching a Component](/scr/components-detaching.png)

A custom component can be transformed back into the element or group of elements it was created from. To do this, you need to choose only one component, click "**...**" on the props panel and choose "**Detach**". This action can also be performed by pressing the combination of keys: `Ctrl` + `Alt` + `B` or `⌘ (Cmd)` + `⌥ (Option)` + `B`.

### Reset Overrides and Reset All Overrides

![Reset Overrides and Reset All Overrides](/scr/components-reset-overrides.png)

If you changed a custom component and then decide to go back to its original version (Master), use the reset option. Choose only one component, click on the "**...**" button and select "**Reset Overrides**". If you want to reset the changes for all elements, both parent and children, click "**Reset All Overrides**".

To learn more about overrrides, go to [Overrides](/interface/components/overrides).

### Push to Master and Push All to Master

![Push to Master and Push All to Master](/scr/components-push-to-master.png)

If you changed a custom component and would like to apply the change to all copies of this component, use the command for sending changes to Master. To do this, choose only one component, click on the "**...**" on the props panel and choose "**Push to Master**". If you want to send the changes made to a parent element and all children elements to Master, click "**Push All to Master**".

**Important!** When you use "**Push to Master**" and "**Push All to Master**", all changed styles in the copies will be preserved (those that contain overrides). The styles will be changed only in those copies that you didn’t edit.

### Save as New Component

![Save as New Component](/scr/components-creating-new.png)

You can create a new custom component using an existing custom component. To do this, you need to choose only one component, click "**...**" on the props panel and select "**Save as New Component**".

---
