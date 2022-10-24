const path = require("path");

console.log("\n\n======================================================\n\n");

console.log(path);

console.log("\n\n======================================================\n\n");

console.log("path.sep = ", path.sep);

console.log("\n\n======================================================\n\n");

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

console.log("\n\n======================================================\n\n");

const base = path.basename(filePath);
console.log(base);

console.log("\n\n======================================================\n\n");

const direname = path.resolve(__dirname);
const absolutePath = path.resolve(__dirname, "folder", "sayHello.js");
const absolutePath2 = path.resolve("folder", "sayHello.js");
console.log("dirname =", direname);
console.log("absolutePath =", absolutePath);
console.log("absolutePath2 =", absolutePath2);
