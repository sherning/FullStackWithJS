
# When to Use `import` vs `require`

| Factor             | `import` (ES6 Modules)                                                                     | `require` (CommonJS Modules)                                                                                     |
|--------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Environment        | Modern front-end development, supported in Node.js (v12+).                                | Standard in Node.js (all versions), common in back-end development.                                           |
| Syntax             | `import moduleName from 'module-name';`<br>`import { function1, function2 } from 'module-name';` | `const moduleName = require('module-name');`                                                                   |
| Use Cases          | - Front-end frameworks (React, Angular, Vue.js).<br>- Node.js with ES6 module support.<br>- Projects that utilize tree shaking with bundlers. | - Node.js back-end development.<br>- Older Node.js versions.<br>- Projects with CommonJS modules.              |
| Compatibility      | Requires ES6 module support. May need to add `"type": "module"` in `package.json` for Node.js. | Works out of the box in Node.js. No additional configuration needed.                                         |
| Key Differences    | - Allows named imports.<br>- Static loading, supports tree shaking.<br>- Hoisted and statically analyzed before runtime. | - Loads entire module.<br>- Dynamic loading.<br>- Executed at runtime.                                      |
| Conclusion         | Use for modern JavaScript development in front-end or newer Node.js environments.          | Use for Node.js back-end development, especially in legacy projects or with non-ES6 compatible packages. |

