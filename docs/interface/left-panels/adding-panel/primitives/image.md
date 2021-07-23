---
id: image
title: Image
sidebar_label: Image
---

![The Image Primitive on Page](/scr/primitives-image.png)

##### The Image primitive represents an image

The Image properties specify the source of the image, the cropping method, and alignment when cropping. You can also adjust sources for devices with high pixel densities and for different layouts. The Loading property helps speed up page loading.

#### Available props

| Prop name       | Description                                                                                                                                                                           |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| object fit      | Defines the way the content should fill the container relative to its height and width                                                                                                |
| object position | Used with object fit and specifies the position of the contents inside the container                                                                                                  |
| src             | Image link                                                                                                                                                                            |
| srcset          | A comma-separated list of one or more lines defining a set of possible images to display in the browser. Each line of the list must contain a pixel width or pixel density descriptor |
| sizes           | A list of image sizes for different page sizes. It contains comma-separated media queries with image width values                                                                     |
| alt             | Alternative text description of the image will be displayed in the browser if the image couldn't be loaded                                                                            |
| title           | The image title that will be shown as a tooltip when you hover over the image                                                                                                         |
| loading         | Postpone image loading outside the screen                                                                                                                                             |

---
