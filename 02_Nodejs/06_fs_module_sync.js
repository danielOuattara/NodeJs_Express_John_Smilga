

const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./folder/01_first.txt", "utf8");
const second = readFileSync("./folder/02_second.txt", "utf8");

console.log(first,second)

writeFileSync('./folder/resul-sync.txt', `here is the result: ${first}${second}\n`, {flag: 'a'})


console.log('done with this task')
console.log('starting the next one')
const third = writeFileSync("./folder/03_third.txt", `${first}${second}`);
const fourth = writeFileSync("./folder/04_fourth.txt", "Fourth text", "utf8");




