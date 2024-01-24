
# CommonJS vs ECMAScript Modules (ESM)

| Feature                    | CommonJS                                       | ECMAScript Modules (ESM)                        |
|----------------------------|------------------------------------------------|-------------------------------------------------|
| Syntax                     | `require()` for import, `module.exports` for export | `import` and `export` statements               |
| Structure                  | Dynamic, allows conditional `require()`        | Static, import/export at top level only         |
| Loading Mechanism         | Synchronous                                    | Supports asynchronous loading                   |
| Environment Support        | Primarily Node.js                              | Both browser and server-side (Node.js)          |
| Live Bindings              | No live bindings                               | Supports live bindings                          |
| Browser Support            | Requires bundling tools like Browserify       | Natively supported in modern browsers           |
| Interoperability           | -                                              | Mixing with CommonJS can be complex             |
| JSON and Native Module Support | Direct `require` of JSON files possible       | Requires additional loader or different approach |

