---
id: make-a-staff-files
title: Make a Staff File (with Airtable)
sidebar_label: Make a Staff File (with Airtable)
---

import YouTube from "../../src/components/YouTube";

### Introduction. Why Airtable?

Airtable is a popular no-code tool for creating large databases. They look like tables but have much more powerful functionality. We chose Airtable for our tutorial because it’s easier to transfer data via API.

If you are new to Airtable, read the [official guide](https://support.airtable.com/hc/en-us/sections/360009677453) on the company website before working with it.

For the front-end [Quarkly](https://quarkly.io/) part we will use just two components:

- _An employee card._ It will contain a photo, text, and two buttons: send email and call. The card will receive this data from the parent component — the wrapper.
- _Wrapper._ It will fetch data from Airtable, generate cards, and pass data to them.

If you don’t have time to read the whole post, you can watch this video with subtitles and time codes:

<YouTube videoId="mbPukPi0RZA" />

### Part 1. Develop front end on Quarkly

##### To create a card:

1. Create a new project on Quarkly. Let’s call it Airtable Example;

2. Go to the project;

3. Add a ready-made block with employee cards. To do this, click on the black "**+**" icon and select a block from the Team category;

   ![](/scr/tutorials-airtable-part1-empty-block.png)

   ![](/scr/tutorials-airtable-part1-added-block.png)

4. Select the first card (**StackItem**) on the Layers panel and turn it into a component;

   ![](/scr/tutorials-airtable-part1-selected-card.png)

   To do that, click on the "**3 dots**" icon and select "**Convert to Component**". Let’s call this component EmployeeCard.

   ![](/scr/tutorials-airtable-part1-convert-card.png)

5. Now you can easily edit the code of this React component, but let’s not do that right now. Let’s first create the wrapper component.

##### To create a wrapper:

1. Prepare the wrapper for conversion into a component. To do this, first remove the other three cards (we don’t need them);

   ![](/scr/tutorials-airtable-part1-remove-card.png)

2. Now take **EmployeeCard** from **Stack**. Then convert the **Stack** into a component, just as we did before with **EmployeeCard**: the right panel, "**3 dots**" icon, and "**Convert to Component**". Let’s call the component **EmployeeTable**.

   ![](/scr/tutorials-airtable-part1-create-wrapper.png)

   That’s all for now. The first stage is over. Let’s leave the components and create a database on Airtable.

### Part 2. Create a database on Airtable

Go to [Airtable](https://airtable.com/) and sign up/log in.

1. Click on the "**Add a base**" button to create a new base. Select "**Start with a template**" from the drop-down menu;

   ![](/scr/tutorials-airtable-part2-add-base.png)

2. Select "**HR & Recruiting**" and the "**Employee directory**" template. Then click on the "**Use template**" button;

   ![](/scr/tutorials-airtable-part2-select-template.png)

3. Go to the created project;

   ![](/scr/tutorials-airtable-part2-created-project.png)

We are not going to change anything at this stage: the base is fine as it is.

### Part 3. Get access to the API

We first decided to use Airtable because of its user-friendly API. And it’s also important that Airtable allows taking data and sending it to our database for free.

1. Go to the API project selection page: [https://airtable.com/api](https://airtable.com/api)

   ![](/scr/tutorials-airtable-part3-select-page.png)

2. Select our project "**Employee**" directory. In the documentation that will appear, go to "**AUTHENTICATION**".

   ![](/scr/tutorials-airtable-part3-select-project.png)

3. Copy the following two lines below the "**EXAMPLE USING BEARER TOKEN (RECOMMENDED)**" heading:

   ```
   $ curl https://api.airtable.com/v0/app2MdLITmRTBsrkg/Employee%20directory \
   -H "Authorization: Bearer YOUR_API_KEY"
   ```

4. Now you need **YOUR_API_KEY**. It’s a unique access key generated for each account. You can find it in your settings.

   ![](/scr/tutorials-airtable-part3-account-settings.png)

5. On the page that will appear, go to the API section and click on the "**Generate API key**" button;

   ![](/scr/tutorials-airtable-part3-generate-api-key.png)

6. Copy the key and save it next to the lines from step 3. You will need it later.

### Part 4. Integrate Airtable base into Quarkly

In this part, you will add code to the **EmployeeTable** component that will fetch data from the API.

1. Go to the code editor. To do this, open the "**Components**" tab and click on the "**&lt;&gt;**" icon next to **EmployeeTable** (it will appear when mousing over the component);

   ![](/scr/tutorials-airtable-part4-find-component.png)

2. Now the component code looks like this:

   ![](/scr/tutorials-airtable-part4-code-component.png)

3. Replace:

   ```js
   import React from "react";
   ```

   with

   ```js
   import React, { useEffect, useState } from "react";
   ```

   This way, you import the `useEffect` and `useState` hooks that you will need later;

4. Add the following line below to import the **EmployeeCard** component:

   ```js
   import EmployeeCard from "./EmployeeCard";
   ```

5. Replace `children` (you don’t need them for now) with `override` (you need them to select elements and style them on the page):

   ```js
    const EmployeeTable = props => {
    const {
      children,
      rest
    } = useOverrides(props, overrides, defaultProps);
   ```

   with

   ```js
    const EmployeeTable = props => {
    const {
      override,
      rest
    } = useOverrides(props, overrides, defaultProps);
   ```

6. Add a call to the useState hook below that will monitor the state:

   ```js
   const [employees, setEmployees] = useState([]);
   ```

7. Then add the `useEffect` hook that will make queries to the Airtable API and put the received data into the state through the `setEmployees` function.

   Add here the lines that you copied earlier. Add the URL of the database and the `?view=All%20employees` parameter to `fetch`. Add the authorization parameters and the API key (that you generated in Part 3 step 4 of this article) to `headers`.

   ```js
   useEffect(() => {
     fetch(
       "https://api.airtable.com/v0/appWw7KBKSc9bPjZE/Employee%20directory?view=All%20employees",
       {
         headers: {
           Authorization: "Bearer YOUR_API_KEY",
         },
       }
     )
       .then((response) => response.json())
       .then((data) => setEmployees(data.records.map(({ fields }) => fields)));
   }, []);
   ```

8. Now generate cards with the received data by transferring `props` to them with data and `override`. You need it to select and style elements on the page.

   Replace:

   ```jsx
    return <Stack {...rest}>
        {children}
      </Stack>;
    };
   ```

   with

   ```jsx
    return <Stack {...rest}>
        {
          employees.map(employee => <EmployeeCard  {...override("employeeCard")}  employee={employee} />)
        }
      </Stack>;
    };
   ```

9. Press `Ctrl` + `S` (or `⌘ (Cmd)` + `S` on MacOS). The final code should look like this:

   ```js
   import React, { useEffect, useState } from "react";
   import { useOverrides, Stack } from "@quarkly/components";
   import EmployeeCard from "./EmployeeCard";

   const defaultProps = {
     "margin-top": "40px",
   };
   const overrides = {};

   const EmployeeTable = (props) => {
     const { override, rest } = useOverrides(props, overrides, defaultProps);

     const [employees, setEmployees] = useState([]);

     useEffect(() => {
       fetch(
         "https://api.airtable.com/v0/appWw7KBKSc9bPjZE/Employee%20directory?view=All%20employees",
         {
           headers: {
             Authorization: "Bearer YOUR_API_KEY",
           },
         }
       )
         .then((response) => response.json())
         .then((data) =>
           setEmployees(data.records.map(({ fields }) => fields))
         );
     }, []);

     return (
       <Stack {...rest}>
         {employees.map((employee) => (
           <EmployeeCard {...override("employeeCard")} employee={employee} />
         ))}
       </Stack>
     );
   };

   Object.assign(EmployeeTable, {
     ...Stack,
     defaultProps,
     overrides,
   });

   export default EmployeeTable;
   ```

**Important:** don’t forget to paste your unique API key instead of "YOUR_API_KEY".

Ready! Now get the data from Airtable, put it in employees, and apply the map method to it. For each employee record, create an `<EmployeeCard/>` where we send specific data as props.

Now let’s configure **EmpolyeeCard** to accept this data and show it in the right place.

### Part 5. Make EmployeeCard work with the database

In this stage, you will configure the employee card to accept data and display it.

1. Open the component code. To do this, go to the "**Components**" tab, find **EmployeeCard**, mouse over it, and click on the "**&lt;&gt;**" item.
2. Now the component code looks like this:

   ```js
   import React from "react";
   import { useOverrides, Override, StackItem } from "@quarkly/components";
   import { Box, Text } from "@quarkly/widgets";

   const defaultProps = {
     width: "25%",
     "lg-width": "50%",
     "sm-width": "100%",
   };

   const overrides = {
     box: {
       kind: "Box",
       props: {
         height: "0",
         margin: "0 0 20px 0",
         "padding-bottom": "100%",
         background:
           "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat",
       },
     },
     text: {
       kind: "Text",
       props: {
         color: "--grey",
         margin: "0",
         children: "CEO",
       },
     },
     text1: {
       kind: "Text",
       props: {
         as: "h3",
         font: "--headline3",
         margin: "5px 0 20px 0",
         children: "Nathan K. Joe",
       },
     },
     text2: {
       kind: "Text",
       props: {
         as: "p",
         margin: "20px 0 5px 0",
         children:
           "This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.",
       },
     },
   };

   const EmployeeCard = (props) => {
     const { override, children, rest } = useOverrides(
       props,
       overrides,
       defaultProps
     );
     return (
       <StackItem {...rest}>
         <Override slot="StackItemContent" flex-direction="column" />
         <Box {...override("box")} />
         <Text {...override("text")} />
         <Text {...override("text1")} />
         <Text {...override("text2")} />
         {children}
       </StackItem>
     );
   };

   Object.assign(EmployeeCard, { ...StackItem, defaultProps, overrides });

   export default EmployeeCard;
   ```

3. Find this line:

   ```js
    } = useOverrides(props, overrides, defaultProps);
   ```

   And paste it below:

   ```js
   const { employee = {} } = rest;
   ```

   The data is added to the **employee** item.

4. Using the employee’s photo as an example, let’s check if everything works as expected. Find this line and replace it:

   ```jsx
   <Box {...override("box")} />
   ```

   with

   ```jsx
   <Box
     {...override("box")}
     background-image={`url(${
       employee.Photo && employee.Photo[0] && employee.Photo[0].url
     })`}
   />
   ```

   Find this:

   ```js
    "background": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
   ```

   and replace with

   ```js
    "background-size": "cover",
    "background-position": "center",
    "background-image": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
   ```

   This is how the final result should look:

   ![](/scr/tutorials-airtable-part5-final-result.png)

5. Let’s see what fields we have. The API documentation is done very well on Airtable. You can find the field names on [https://airtable.com/api](https://airtable.com/api) by selecting your base.

   Find the "**EMPLOYEE DIRECTORY TABLE**" section.

   So, we have:

   > Name<br/>
   > Department<br/>
   > Home address<br/>
   > Email address<br/>
   > DOB<br/>
   > Start date<br/>
   > Phone<br/>
   > Reports to<br/>
   > Title<br/>
   > Status<br/>
   > Photo<br/>
   > Location<br/>

6. AddTitle. To do this, replace

   ```jsx
   <Text {...override("text")} />
   ```

   with

   ```jsx
   <Text {...override("title")} children={employee.Title} />
   ```

   Don’t forget to edit the `overrides` of this component so that you can select and edit it on the page.

   Replace:

   ```js
    "text": {
      "kind": "Text",
      "props": {
        "color": "--grey",
        "margin": "0",
        "children": "CEO"
      }
    },
   ```

   with

   ```js
    "title": {
      "kind": "Text",
      "props": {
        "color": "--grey",
        "margin": "0",
        "children": "Title"
      }
    },
   ```

   Save and check.

   ![](/scr/tutorials-airtable-part5-with-title.png)

   The result: a line with the job title was added to the cards.

7. Repeat the same actions for **Name** and **Home address**.

   Replace

   ```jsx
    <Text {...override("text1")} />
    <Text {...override("text2")} />
   ```

   with

   ```jsx
    <Text {...override("name")} children={employee.Name} />
    <Text {...override("address")} children={employee['Home address']} />
   ```

   And change their `overrides`. To do this, replace

   ```js
    "text1": {
      "kind": "Text",
      "props": {
        "as": "h3",
        "font": "--headline3",
        "margin": "5px 0 20px 0",
        "children": "Nathan K. Joe"
      }
    },

    "text2": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "20px 0 5px 0",
        "children": "This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides."
      }
    }
   ```

   with

   ```js
    "name": {
      "kind": "Text",
      "props": {
        "as": "h3",
        "font": "--headline3",
        "margin": "5px 0 5px 0",
        "children": "Name"
      }
    },

    "address": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "10px 0 5px 0",
        "children": "Home address"
      }
    },
   ```

   Save and check.

   ![](/scr/tutorials-airtable-part5-with-names.png)

8. Add some more Text in the same way. Let’s leave **Department** and **Reports** because this data is in another "**DEPARTMENTS TABLE**" database.

   Add:

   ```jsx
    <Text {...override("address")} children={employee['Home address']} />
    <Text {...override("Start date")} children={`Start date: ${employee['Start date']}`} />
    <Text {...override("Status")} children={employee['Status']} />
    <Text {...override("DOB")} children={`Birth date: ${employee['DOB']}`} />
   ```

   and

   ```js
    "address": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "10px 0 5px 0",
        "children": "Home address"
      }
    },
    "Start date": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "10px 0 5px 0",
        "children": "Start date"

      }
    },
    "Status": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "10px 0 5px 0",
        "children": "Status"
      }
    },
    "DOB": {
      "kind": "Text",
      "props": {
        "as": "p",
        "margin": "10px 0 5px 0",
        "children": "Birth date"
      }
    },
   ```

   This is the final result:

   ![](/scr/tutorials-airtable-part5-with-more-text.png)

9. Now add to Link components where you will create Phone and Email:

   ```js
   import { Box, Text } from "@quarkly/widgets";
   ```

   replace with:

   ```js
   import { Box, Text, Link } from "@quarkly/widgets";
   ```

   And add these lines:

   ```jsx
    <Link {...override("Email address")} children={employee['Email address']} href={`mailto:${employee['Email address']}`} />
    <Link {...override("Phone")} children={employee['Phone']} href={`tel:${employee['Phone']}`}/>
   ```

   Don’t forget about their overrides:

   ```js
    "Email address": {
      "kind": "Link",
      "props": {
        "margin": "10px 0 5px 0",
        "color": "--primary",
        "text-decoration": "none",
        "children": "Email"
      }
    },
    "Phone": {
      "kind": "Link",
      "props": {
        "margin": "10px 0 5px 0",
        "color": "--primary",
        "text-decoration": "none",
        "children": "Phone"
      }
    },
   ```

   Check the result.

   ![](/scr/tutorials-airtable-part5-with-links.png)

### Final steps

##### This is the final code:

```js
import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text, Link } from "@quarkly/widgets";

const defaultProps = {
  width: "25%",
  "lg-width": "50%",
  "sm-width": "100%",
};

const overrides = {
  box: {
    kind: "Box",
    props: {
      height: "0",
      margin: "0 0 20px 0",
      "padding-bottom": "100%",
      "background-size": "cover",
      "background-position": "center",
      "background-image":
        "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat",
    },
  },
  title: {
    kind: "Text",
    props: {
      color: "--grey",
      margin: "0",
      children: "title",
    },
  },
  name: {
    kind: "Text",
    props: {
      as: "h3",
      font: "--headline3",
      margin: "5px 0 5px 0",
      children: "Name",
    },
  },
  address: {
    kind: "Text",
    props: {
      as: "p",
      margin: "10px 0 5px 0",
      children: "Home address",
    },
  },
  "Start date": {
    kind: "Text",
    props: {
      as: "p",
      margin: "10px 0 5px 0",
      children: "Start date",
    },
  },
  Status: {
    kind: "Text",
    props: {
      as: "p",
      margin: "10px 0 5px 0",
      children: "Status",
    },
  },
  DOB: {
    kind: "Text",
    props: {
      as: "p",
      margin: "10px 0 5px 0",
      children: "Birth date",
    },
  },
  "Email address": {
    kind: "Link",
    props: {
      margin: "10px 0 5px 0",
      color: "--primary",
      "text-decoration": "none",
      children: "Email",
    },
  },
  Phone: {
    kind: "Link",
    props: {
      margin: "10px 0 5px 0",
      color: "--primary",
      "text-decoration": "none",
      children: "Phone",
    },
  },
};

const EmployeeCard = (props) => {
  const { override, children, rest } = useOverrides(
    props,
    overrides,
    defaultProps
  );

  const { employee = {} } = rest;

  return (
    <StackItem {...rest}>
      <Override slot="StackItemContent" flex-direction="column" />
      <Box
        {...override("box")}
        background-image={`url(${employee.Photo[0].url})`}
      />
      <Text {...override("title")} children={employee.Title} />
      <Text {...override("name")} children={employee.Name} />
      <Text {...override("address")} children={employee["Home address"]} />
      <Text
        {...override("Start date")}
        children={`Start date: ${employee["Start date"]}`}
      />
      <Text {...override("Status")} children={employee["Status"]} />
      <Text {...override("DOB")} children={`Birth date: ${employee["DOB"]}`} />
      <Link
        {...override("Email address")}
        children={employee["Email address"]}
        href={`mailto:${employee["Email address"]}`}
      />
      <Link
        {...override("Phone")}
        children={employee["Phone"]}
        href={`tel:${employee["Phone"]}`}
      />
      {children}
    </StackItem>
  );
};

Object.assign(EmployeeCard, { ...StackItem, defaultProps, overrides });

export default EmployeeCard;
```

Commit to GitHub and publish on Netlify:

![](/scr/tutorials-airtable-part6-publication-commit.png)

![](/scr/tutorials-airtable-part6-publication-deploy.png)

Wait a few minutes and check: [https://keen-varahamihira-c54ae1.netlify.app/](https://keen-varahamihira-c54ae1.netlify.app/)

![](/scr/tutorials-airtable-part6-publication-result.png)

To check synchronization, change the data in the database.

![](/scr/tutorials-airtable-part6-publication-database.png)

Now you will see the changes in the app.

![](/scr/tutorials-airtable-part6-publication-changes.png)

In the future you will be able to style your card elements but you want to do this without breaking the configured import from Airtable. You can see an example [here](https://youtu.be/mbPukPi0RZA?t=489).

GitHub repository: [https://github.com/quarkly-dev/Getting-data-from-Airtable-tutorial](https://github.com/quarkly-dev/Getting-data-from-Airtable-tutorial)

---
