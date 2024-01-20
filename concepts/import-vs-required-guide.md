
# `require` vs `import` in JavaScript

## When to Use `require`
- Use in a Node.js environment that does not support ES6 modules.
- When dealing with CommonJS format modules.
- For dynamic importing based on runtime conditions.

### Example of `require`:
```javascript
// Importing a module using require
const fs = require('fs');

// Using the imported module
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

## What does `require` return?
- `require` imports and returns whatever is exported by the module (function, object, class, etc.).
- Node.js reads, executes the module's code, and returns its `exports`.

### Example:
```javascript
// In myModule.js
function sayHello(name) {
  return `Hello, ${name}!`;
}
module.exports = sayHello;

// In another file
const greet = require('./myModule');
console.log(greet('Alice')); // Outputs: Hello, Alice!
```

## When to Use `import`
- Use with modern JavaScript and front-end frameworks (React, Angular, Vue.js).
- In Node.js environments (v12+) that support ES6 modules.
- To utilize static analysis and tree shaking.

### Example of `import`:
```javascript
// Importing a module using import
import express from 'express';

// Using the imported module
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
```

## Conclusion
- `require` is used in CommonJS module format, primarily in Node.js.
- `import` is part of ES6 module format, used in modern JavaScript development.
- `require` returns the exported module content, while `import` allows for more flexible module loading.
