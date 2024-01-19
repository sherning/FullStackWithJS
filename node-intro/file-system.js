// a journey of a thousand miles begins with the first step.

const fs = require("fs");
fs.writeFile("message.txt", "Hello World", (err) => console.log("successful!"));
