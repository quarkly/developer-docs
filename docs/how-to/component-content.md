---
id: component-content
title: How to Get the Component Content
sidebar_label: How to Get the Component Content
---

In this section, you'll learn about markup and the component content display.

- As a simple example, let's display the **Text** component with some content:

  ```jsx
  <Text>Some Text</Text>
  ```

- To display the value of a variable or prop, wrap the variable name in curly brackets:

  ```jsx
  <Text>{someVariable}</Text>
  ```

- Similarly to a variable, you can display the result of a function:

  ```jsx
  <Text>{someFunction()}</Text>
  ```

- You can add conditions and different expressions:

  ```jsx
  <Text>{someProp === "opt1" ? "First line" : "Second line"}</Text>
  ```

  In this example, we check if the value of `someProp` equals the specified `'opt1'` and, if so, we output **First line**; otherwise we output **Second line**.

  Also, you can take a part of the text out of the expression so you don't repeat it. The final example would look like this:

  ```jsx
  <MyButton>{someProp === "opt1" ? "First" : "Second"} line</MyButton>
  ```

  If in your case, for example, the condition `someProp === 'opt1'` is enough and the second line does not need to be output, you can simplify the previous example:

  ```jsx
  <MyButton>{someProp === "opt1" && "First line"}</MyButton>
  ```

  **Note:** The same way, by condition, you can show or hide specific components, for example:

  ```jsx
  <MyButton>
    {someProp === "opt1" ? (
      <Text>First component</Text>
    ) : (
      <Text>Second component</Text>
    )}
  </MyButton>
  ```

  or:

  ```jsx
  <MyButton>{someProp === "opt1" && <Text>First component</Text>}</MyButton>
  ```

- To move the text to a new line, add the `<br />` tag in the place of the hyphenation:

  ```jsx
  <Text>
    First line <br />
    Second line
  </Text>
  ```

- In order not to break the text, you can also wrap it in curly brackets with slanted apostrophes to apply all indents and breaks to the text, and insert values of variables and functions or expressions in the middle of the text using the `${someVariable}` construction:

  ```jsx
  <Text>
    {` First line with the variable ${someVariable}
    Second line with the result of the function ${someFunction()}
    Third line with the expression 2+2=${2 + 2}
    Fourth line \n
    Fifth line `}
  </Text>
  ```

  In this example, pay attention to the `\n` character as it also creates a line break without breaking it in the component code. Here is a short list of special characters:

  - `\n` – line break;
  - `\'` – single quote (if you used single quotes in the text output);
  - `\"` – double quote (if you used double quotes in the text output);
  - `\\` – backslash;
  - `\t` – tab character.

  **Note:** The builder allows you to format the text in the interface, which is more convenient in most cases. Plus, it usually makes sense to let the user format the text as they like, while you describe only the content of the output text in the component.

- You can also write a whole snippet of markup in a variable and then insert it in the code at various places. For example, you can create a function that returns a finished markup for output. Let's display the title and the description:

  ```jsx
  const headerVariable = <h1>Header Text!</h1>;
  const getDescription = (text) => <p>Awesome {text}.</p>;

  return (
    <Box {...props}>
      {headerVariable}
      {getDescription("description text")}
    </Box>
  );
  ```

  This way, you can take parts of the markup into separate functions outside of the component body and divide a complex component into several parts.

---
