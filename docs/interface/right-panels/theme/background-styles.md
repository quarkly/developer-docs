---
id: background-styles
title: Background Styles
sidebar_label: Background Styles
---

import YouTube from "../../../../src/components/YouTube";

<YouTube videoId="r353OYO5C60" />

Backgrounds are used a lot in design. In addition to a plain color, you may want to add a gradient, tile, or an image. Element properties allow you to create a complex background consisting of several simpler overlapping ones. A background style is a set of the following properties:

-   Color, a background color is displayed when no other types are set;
-   Type, background type (image, linear-, radial-, and conic-gradient);
-   Position, background position relative to the container;
-   Size, background size relative to the container;
-   Repeat, background repetition;
-   Attachment, background scrolling;
-   Clip, background/border ratio.

To add a background style to the theme, click on the "**+**" icon in front of the category.

![Add New Background Styles to the Project Theme](/scr/theme-panel-background-styles-add.png)

To add a background style from the theme to an element, go to the Styles panel, click on the ![Variable theme icon](/img/icon-theme-variable.svg) icon next to the Background property and select the background style you want.

![Apply Background Styles from the Project Theme](/scr/theme-panel-background-styles-apply.png)

#### Configuring the code

```
background='--primaryGradient'
```

---
