const { writeFileSync } = require("fs");

console.time();
for(let i = 0; i < 100000; i++) {
    writeFileSync("./folder/hugeFile.txt", `Hello world ${i}\n`, {flag: "a"})
}
console.timeEnd();
console.log("Terminated")