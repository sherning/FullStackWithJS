const fs = require("fs").promises;
const filePath = "message.txt";

async function writeToFile(message, filePath) {
  return await fs.writeFile(filePath, message);
}

const readFromFile = async (filePath) => {
  return await fs.readFile(filePath, "utf8");
};

// Ensure readFromFile is called after writeToFile has finished

async function main() {
  await writeToFile("Hello! My name is Sher Ning", filePath);
  const data = await readFromFile(filePath);
  await writeToFile(data + `\nI'm replying back to myself.`, filePath);
}

main();
