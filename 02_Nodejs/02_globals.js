
/*
global
__dirname
__filename
module
process
require
*/

console.log("\n\n=================================================================\n\n");

console.log(global);
console.log("\n\n=================================================================\n\n");

console.log(__dirname)
console.log("\n\n=================================================================\n\n");

console.log(__filename)
console.log("\n\n=================================================================\n\n");

console.log(module)
console.log("\n\n=================================================================\n\n");

console.log(process)
console.log("\n\n=================================================================\n\n");

console.log(require)
console.log("\n\n=================================================================\n\n");

setTimeout(() => {
    console.log("Hello NodeJs");
    clearInterval(interval);
}, 4000)

let i = 0;
let interval= setInterval(() => {
    console.log("setInteval ...", i);
    i++
}, 1000)