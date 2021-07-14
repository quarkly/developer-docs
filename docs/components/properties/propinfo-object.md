---
id: propinfo-object
title: PropInfo Object
sidebar_label: PropInfo Object
---

To add/configure component parameters, create the `propInfo` object where the properties are the names of the parameters and the values are their descriptions. For example:

```js
propInfo: {
  someProp: {
    title: 'Property Title',
    description: {
      en: 'Property Description',
    },
    control: 'select',
    variants: ['opt1', 'opt2'],
    multiply: true,
    category: 'Main',
    weight: 1
  }
}
```

Let's take a closer look at the example above:

| Prop&nbsp;name | Description                                                                                                                                                                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | Custom parameter name displayed in the builder.                                                                                                                                                                                                    |
| description    | Description in several languages displayed as a tooltip when hovering over the title.                                                                                                                                                              |
| variants       | List of options, used in `input`, `select`, and `radio-group`.                                                                                                                                                                                     |
| multiply       | A "**+**" button will be added next to the parameter name, and the user will be able to use multiple copies of the current parameter to select multiple values. If it's enabled, you get an array with a list of selected values in the component. |
| category       | The name of the custom category for grouping props on the right panel. If there is no category with this name, it will be created automatically. The categories are sorted from A to Z.                                                            |
| weight         | The props input box width in the range of values from 0 to 1, which is equal to 0 to 100% of the right panel width. You can place multiple props on the same line if their total width is no more than 1.                                          |
| control        | Input field type; different control types are available.                                                                                                                                                                                           |

Control Types

| Prop&nbsp;name | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input          | A simple text field. Used to enter single-line text. Returns a string with the text entered by the user.<br/>If there's the `variants` property, it turns into `datalist` with variants transferred.                                                                                                                                                                                                                                                       |
| checkbox       | A simple switch. Used to enable or disable a component function. Returns the **true** value if enabled and the **false** value if disabled.                                                                                                                                                                                                                                                                                                                |
| select         | A drop-down list with text headings. Can be used to switch the text value if the number of choices or the length of the lines exceeds the size of the panel.<br/>A list of options available to the user can be specified in the `variants: ['one', 'two', 'three']` prop.<br/>You can group a list of options using an object with the `label` title and with the `options` list in the group.<br/>Returns a string with the selected value.              |
| radio-group    | Multiple text heading switch. Can be used to switch short text values if the number of options and the length of the lines don't exceed the panel size.<br/>Return a string with the selected value. A list of options available to the user can be specified in the property `variants: ['one', 'two', 'three']`.<br/> There are three designs available for the switch, which can be selected using the `design: 1` property.                            |
| font           | Font settings panel. Can be used to customize the font in a component in general. Returns a string with the font styles: `italic normal 400 1em/1.5 --fontFamily-googleRoboto`.                                                                                                                                                                                                                                                                            |
| icon           | A panel for selecting icons from the set. Can be used to get the icon name from the available sets in the builder. Returns a string with the icon name.                                                                                                                                                                                                                                                                                                    |
| image          | A panel for selecting an image. Can be used to load and select loaded or imported images in the component. Returns a string with the image link.                                                                                                                                                                                                                                                                                                           |
| color          | Color settings panel. Can be used to customize colors in a component in general. Returns a string with a variable name or a custom color value in **#HEX** (if transparency is not used) or **RGBA**.                                                                                                                                                                                                                                                      |
| background     | Background settings panel. Can be used to customize the background in a component in general. Returns a string with a variable name or a custom color value in **#HEX** or **RGBA** and the image or gradient styles, if indicated: <ul><li>gradient styles: `#000000 repeating-linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)`</li><li>image styles: `--color-dark url(image.png) center/contain no-repeat fixed border-box`</li></ul> |
| transition     | Transition settings panel                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| transform      | Transform settings panel                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| shadow         | Shadow settings panel                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| filter         | Filter settings panel                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Input fields `font`, `color`, `background`, `transition`, `transform`, `shadow`, and `filter` are textual, and when clicked, they open the built-in settings panel in the builder and return the generated string with the styles selected on the panel.

---
