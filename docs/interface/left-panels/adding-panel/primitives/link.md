---
id: link
title: Link
sidebar_label: Link
---

![Примитив Link на странице](https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-link.png?v=2021-05-16T08:11:09.789Z)

##### Примитив Link служит для:

-   создания ссылки на другие страницы;
-   создания ссылки на части внутри текущей или другой страницы (якорь);
-   создания ссылки на открытие файлов;
-   cоздания ссылки для написания письма;
-   cоздания ссылки с номером телефона.

В свойствах Link можно задавать адрес перехода, поведение вкладки при переходе по ссылке, поведение при переносе строк и при переполнении.

#### Доступные свойства

| Prop name     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| overflow-wrap | Sets whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box                                                                                                                                                                                                                                                                                                                                    |
| word-break    | Sets whether line breaks appear wherever the text would otherwise overflow its content box                                                                                                                                                                                                                                                                                                                                                                                 |
| white-space   | Sets how white space inside an element is handled                                                                                                                                                                                                                                                                                                                                                                                                                          |
| text-indent   | Sets the length of empty space (indentation) that is put before lines of text in a block                                                                                                                                                                                                                                                                                                                                                                                   |
| text-overflow | Sets how hidden overflow content is signaled to users                                                                                                                                                                                                                                                                                                                                                                                                                      |
| hyphens       | Specifies how words should be hyphenated when text wraps across multiple lines                                                                                                                                                                                                                                                                                                                                                                                             |
| href          | Задает адрес, на который следует переходить при клике                                                                                                                                                                                                                                                                                                                                                                                                                      |
| target        | Вы можете определить окно, в которое будет загружаться страница, открытая по ссылке: <br/>&emsp;\_self — загружает страницу в текущее окно;<br/>&emsp;\_blank — загружает страницу в новое окно браузера;<br/>&emsp;\_parent — загружает страницу во фрейм-родитель, если фреймов нет, то это значение работает как \_self;<br/>&emsp;\_top — отменяет все фреймы и загружает страницу в полном окне браузера, если фреймов нет, то это значение работает как \_self.<br/> |

---
