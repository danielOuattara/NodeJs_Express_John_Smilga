
const path = require('path');

// console.log("======================================================")
// console.log(path)


// console.log("======================================================")
// console.log(path.sep)

// console.log("======================================================")
// const filePath = path.join("/content", "subfolder", "test.txt")
// console.log(filePath)

// console.log("======================================================")
// const base = path.basename(filePath);
// console.log(base);


console.log("======================================================")
const absolutePath = path.resolve(__dirname, 'folder', "sayHello.js");
console.log('absolutePath =', absolutePath);