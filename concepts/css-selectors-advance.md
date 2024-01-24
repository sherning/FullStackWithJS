
# Comprehensive Examples of CSS Selectors

CSS selectors are used to target HTML elements based on various criteria. Below are explanations and examples for different types of selectors.

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
  In HTML:
  ```html
  <ul>
    <li>Red text</li>
    <li>Red text</li>
  </ul>
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
  In HTML:
  ```html
  <div>
    <p>Indented paragraph</p>
    <span><p>Not indented paragraph</p></span>
    <p>Indented paragraph</p>
    <p>Indented paragraph</p>
  </div>
  ```

### 3. Adjacent Sibling Selector
- **Syntax**: `A + B`
- **Description**: Selects the FIRST B element immediately following A.
- **Example**:
  ```css
  h1 + p {
    font-size: 18px;
  }
  ```
  In HTML:
  ```html
  <h1>Heading</h1>
  <p>Large font paragraph</p>
  <p>Normal font paragraph</p>
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
  In HTML:
  ```html
  <h1>Heading</h1>
  <div>Not a paragraph</div>
  <p>Line height 1.5</p>
  <p>Line height 1.5</p>
  ```

## Attribute Selectors

- **Example**:
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  a[href^="https://"] {
    color: green;
  }
  ```
  In HTML:
  ```html
  <input type="text" />
  <a href="https://example.com">Green link</a>
  <a href="http://example.com">Normal link</a>
  ```

## Pseudo-class Selectors

- **Example**:
  ```css
  a:hover {
    color: red;
  }
  input:focus {
    border-color: blue;
  }
  ```
  In HTML:
  ```html
  <a href="#">Link (hover to see red color)</a>
  <input type="text" />
  ```

## Pseudo-element Selectors

- **Example**:
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```
  In HTML:
  ```html
  <p>The first line of this paragraph is bold.</p>
  ```

Each type of CSS selector provides a unique way to target elements, allowing for precise styling based on element relationships, attributes, states, and specific parts of elements.
