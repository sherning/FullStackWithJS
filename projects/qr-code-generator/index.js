const inquirer = require("inquirer");
const qr = require("qr-image");

inquirer
  .prompt([
    {
      type: "input",
      name: "websiteName",
      message: "Enter the website name:",
    },
  ])
  .then((answers) => {
    const qrSvg = qr.image(answers.websiteName, { type: "svg" });
    qrSvg.pipe(require("fs").createWriteStream("websiteQR.svg"));
    console.log("QR code generated: websiteQR.svg");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt could not be rendered in the current environment");
    } else {
      console.log("Something else went wrong:", error);
    }
  });
