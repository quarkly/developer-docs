---
id: link
title: Link
sidebar_label: Link
---

![The Link Primitive on Page](/scr/primitives-link.png)

##### The Link primitive is used for:

-   creating a link to other pages;
-   creating a link to parts within the current or another page (anchor link);
-   creating a link to open files;
-   creating a link to write an email;
-   creating a link with a phone number.

In the Link properties, you can set the target address, the tab behavior when you click the link, the Link behavior when transferring lines and when overflowing.

#### Available props

| Prop name     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| overflow-wrap | Sets whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box                                                                                                                                                                                                                                                                                                                           |
| word-break    | Sets whether line breaks appear wherever the text would otherwise overflow its content box                                                                                                                                                                                                                                                                                                                                                                        |
| white-space   | Sets how white space inside an element is handled                                                                                                                                                                                                                                                                                                                                                                                                                 |
| text-indent   | Sets the length of empty space (indentation) that is put before lines of text in a block                                                                                                                                                                                                                                                                                                                                                                          |
| text-overflow | Sets how hidden overflow content is signaled to users                                                                                                                                                                                                                                                                                                                                                                                                             |
| hyphens       | Specifies how words should be hyphenated when text wraps across multiple lines                                                                                                                                                                                                                                                                                                                                                                                    |
| href          | Sets the address to go to when the link is clicked                                                                                                                                                                                                                                                                                                                                                                                                                |
| target        | You can define the window where the page opened by the link will be loaded: <br/>&emsp;\_self - loads the page into the current window;<br/>&emsp;\_blank - loads the page into a new browser window;<br/>&emsp;\_parent - loads the page into the frame parent. If there are no frames, this value works as \_self;<br/>&emsp;\_top - cancels all frames and loads the page in the full browser window. If there are no frames, this value works as \_self.<br/> |

---
