---
id: how-to
title: How To's
sidebar_label: How To's
---

# How To's

## General

#### How to publish the site?

To publish the site, click "**Publish**" on the top bar of the builder. Then in the [modal window that will open](/interface/top-bar/publication/overview), follow the steps below:

1. Select the project structure (for a site we recommend "**Gatsby Project**").
2. Log in or sign up to GitHub.
3. Attach the project to a new or existing repository.
4. Save the code to the repository if you have selected an existing repository.
5. Log in or sign up to Netlify.
6. Attach the project to a new or existing site.
7. Click "**Deploy**".

Project creation and publishing usually takes a few minutes. The status can be seen on the badge ![badge-building](/img/netlify-badge-building.svg)

#### How to save my project and launch it on my PC?

To save and launch the project on PC, click "**Publish**" on the top bar of the builder and in the [modal window that will open](/interface/top-bar/publication/overview), follow the steps below:

1. Select the project structure (for a site we recommend "**Gatsby Project**").
2. Select "**Zip-Archive**" as the storage source.
3. Click "**Download**", save the archive to your PC and extract it to a folder.
4. Install [NodeJS](https://nodejs.org) version 14 or higher on your PC.<br/> If NodeJS is already installed, you can check the current version with the `node -v`.
5. In the project folder on the PC, run the command `npm i` to build the dependencies.
6. After finishing the project building, run the command `npm start` to launch the project.

The project will be available at "**https://localhost:8000**".

#### How to save my project and publish it on another hosting site?

To save the project and publish it on another hosting site, click "**Publish**" on the top bar of the builder and in the [modal window that will open](/interface/top-bar/publication/overview), follow the steps below:

1. Select the project structure (for a site we recommend "**Gatsby Project**").
2. Select "**Zip-Archive**" as the storage source.
3. Click "**Download**", save the archive to your PC, and copy the contents of the archive to your server.
4. Install [NodeJS](https://nodejs.org) version 14 or higher on the server.<br/> If NodeJS is already installed, you can check the current version with the `node -v`.
5. In the project folder on the server, run the command `npm i` to build the dependencies.
6. After finishing the project building, run the command `npm build` to build the project.

## Components

#### How to create a custom component?

To create a new component:

-   Method 1: Click the "**+**" icon on the Adding panel under "**Components**".
-   Method 2: Open the add component modal window, go to "Components" and click "**Create for Project**".

To create a new component from an existing element on the page:

-   Method 1: Select the element on the page, call the context menu and select "**Create new Component**".
-   Method 2: Select the element on the Layers panel, call the context menu and select "**Create new Component**".

#### I added several copies of my component to the layer. How do I change them all at once?

There are 2 options:

-   Option 1: change any copy of the component and click "**Push All to Master**". This action will send the changes to the "master component" and change all copies of the component (if they haven't been changed themselves).
-   Option 2: open the component in the code and change the desired values there. To do this, select the component, right-click the context menu, and select "**Edit code**".

#### Can I turn a copy of my component into primitives?

Yes, click "**Detach**". However, this only works with components made from elements on the page.

#### If I changed my component copy appearance, can I reset the changes and get the master component version back?

Yes, click "**Reset Overrides**" or "**Reset All Overrides**". The difference is that "**Reset Overrides**" only resets changes to the parent component, while "**Reset All Overrides**" also resets changes to the nested components.

#### I'd like to be able to make my modified component into another component. Is that possible?

Yes, you can modify a component and make another component of it, just click "**Create New Component**".

#### Can I change a nested element inside a copy of my component, and send only those changes to the master component?

Yes, select the modified sub-element, and click "**Push to Master**" on that element. If you want to update the master component and all its subcomponents, select "**Push All to Master**" from the copy parent.

#### Can I nest other components within a copy of my component? However, I don't want to send them to the master component. For example, I need to add two additional fields into one form.

Yes, you can add other elements/components to your component copy but only after or before all elements.

---
