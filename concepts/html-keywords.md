
# HTML Keywords and Their Contexts

| Keyword   | Description | Applicable to Elements | Example Usage |
|-----------|-------------|------------------------|---------------|
| `class`   | An attribute used to define one or more class names for an element. Primarily used for styling and selecting elements in CSS and JavaScript. | All HTML elements. | `<div class="container"></div>` |
| `id`      | A unique identifier for an element. Used for styling, JavaScript selection, and as an anchor for linking parts of a page. | All HTML elements. | `<div id="header"></div>` |
| `tagName` | A JavaScript property that returns the tag name of an element in uppercase. Used to identify the type of element in the DOM. | All HTML elements (when accessed via JavaScript). | `document.getElementById('header').tagName // returns 'DIV'` |
| `name`    | An attribute used to specify the name of an element. Important in forms, as it defines the key for form data. Also used in iframes and meta tags. | Form elements (`<input>`, `<select>`, `<textarea>`, `<button>`), `<iframe>`, `<meta>`. | `<input type="text" name="username">` |
