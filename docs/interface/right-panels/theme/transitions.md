---
id: transitions
title: Transitions
sidebar_label: Transitions
---

import YouTube from "../../../../src/components/YouTube";

<YouTube videoId="04BTGW2s-Tc" />

Transitions can be used when styles of an element are changed in response to some actions. For example, when you mouse over an element, it changes color. Transitions make this change smoother. Otherwise, it would be abrupt. Transition values contain the following set of properties:

-   Property, smooth change of a property;
-   Timing function, curve of transition dynamics;
-   Duration, transition duration;
-   Delay, delay before the transition.

To add a transition to the theme, click on the "**+**" icon in front of the category.

![Add New Transition Styles to the Project Theme](/scr/theme-panel-transitions-add.png)

To add a background style from the theme to an element, go to the Effect section, click on the ![Variable theme icon](/img/icon-theme-variable.svg) icon next to the Transition property and select the transition value you want.

![Apply Transition Styles from the Project Theme](/scr/theme-panel-transitions-apply.png)

#### Configuring the code

```
transition='--opacityOut'
```

---
