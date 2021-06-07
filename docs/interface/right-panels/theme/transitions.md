---
id: transitions
title: Transitions
sidebar_label: Transitions
---

[![Theme. Transitions](https://img.youtube.com/vi/04BTGW2s-Tc/0.jpg)](https://www.youtube.com/watch?v=04BTGW2s-Tc)

Transitions can be used when styles of an element are changed in response to some actions. For example, when you mouse over an element, it changes color. Transitions make this change smoother. Otherwise, it would be abrupt. Transition values contain the following set of properties:

-   Property, smooth change of a property;
-   Timing function, curve of transition dynamics;
-   Duration, transition duration;
-   Delay, delay before the transition.

To add a transition to the theme, click on the "**+**" icon in front of the category.

![Добавление новых стилей transition в тему проекта](https://uploads.quarkly.io/landing/docs-theme-panel-transitions-styles-create.png)

To add a background style from the theme to an element, go to the Effect section, click on the
![Иконка переменной темы](https://uploads.quarkly.io/landing/docs-theme-variables-icon.svg?v=1)
icon next to the Transition property and select the transition value you want.

![Применение стилей transition из темы проекта](https://uploads.quarkly.io/landing/docs-theme-panel-shadow-styles-apply.png)

#### Configuring the code

```
transition='--opacityOut'
```

---
