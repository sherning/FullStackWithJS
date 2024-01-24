
# Comprehensive Guide to CSS Selectors

CSS selectors are patterns used to select the elements you want to style. Here's a guide to various types of CSS selectors with examples.

## Basic Selectors

### 1. Universal Selector
- **Syntax**: `*`
- **Description**: Selects all elements.
- **Example**:
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

### 2. Type Selector
- **Syntax**: `elementname`
- **Description**: Selects all elements of a given type.
- **Example**:
  ```css
  div {
    color: blue;
  }
  ```

### 3. Class Selector
- **Syntax**: `.classname`
- **Description**: Selects all elements with the specified class attribute.
- **Example**:
  ```css
  .alert {
    font-weight: bold;
  }
  ```

### 4. ID Selector
- **Syntax**: `#idname`
- **Description**: Selects a single element with the specified id attribute.
- **Example**:
  ```css
  #header {
    background-color: gray;
  }
  ```

## Combinator Selectors

### 1. Descendant Selector
- **Syntax**: `A B`
- **Description**: Selects all B elements that are descendants of A.
- **Example**:
  ```css
  ul li {
    color: red;
  }
  ```

### 2. Child Selector
- **Syntax**: `A > B`
- **Description**: Selects all B elements that are direct children of A.
- **Example**:
  ```css
  div > p {
    margin-left: 20px;
  }
  ```

### 3. Adjacent Sibling Selector
- **Syntax**: `A + B`
- **Description**: Selects the first B element immediately following A.
- **Example**:
  ```css
  h1 + p {
    font-size: 18px;
  }
  ```

### 4. General Sibling Selector
- **Syntax**: `A ~ B`
- **Description**: Selects all B elements that follow A.
- **Example**:
  ```css
  h1 ~ p {
    line-height: 1.5;
  }
  ```

## Attribute Selectors

- **Syntax**: `[attribute]`, `[attribute=value]`, `[attribute^=value]`, `[attribute$=value]`, `[attribute*=value]`
- **Description**: Selects elements based on the presence or value of a specified attribute.
- **Example**:
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  a[href^="https://"] {
    color: green;
  }
  ```

## Pseudo-class Selectors

- **Syntax**: `A:pseudo-class`
- **Description**: Selects elements in a specific state.
- **Example**:
  ```css
  a:hover {
    color: red;
  }
  input:focus {
    border-color: blue;
  }
  ```

## Pseudo-element Selectors

- **Syntax**: `A::pseudo-element`
- **Description**: Selects a part of an element.
- **Example**:
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```
