import("inquirer").then((inquirer) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "websiteName",
        message: "Enter the website name:",
      },
    ])
    .then((answers) => {
      const qrSvg = import("qr-image").image(answers.websiteName, {
        type: "svg",
      });
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
});
