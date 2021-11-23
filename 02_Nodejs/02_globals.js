
/*
global
__dirname
__filename
module
process
require
*/


// console.log(global);
// console.log("=================================================================");

// console.log(__dirname)
// console.log("=================================================================");

// console.log(__filename)
// console.log("=================================================================");

// console.log(module)
// console.log("=================================================================");

// console.log(process)
// console.log("=================================================================");

// console.log(require)
// console.log("=================================================================");

setTimeout(() => {

    console.log("Hello NodeJs");
    clearInterval(interval);
}, 4000)

let i = 0;
let interval= setInterval(() => {
    console.log("setInteval ...", i);
    i++
}, 1000)