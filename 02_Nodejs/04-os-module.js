
const os = require("os");

// console.log(os);

console.log( 'os = ', os);

console.log("======================================================")

// current user info
const user = os.userInfo()
console.log( "user = ", user)

console.log("======================================================")
// method returns the system uptime in seconds
console.log(`${os.uptime()} seconds`)

console.log("======================================================")

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.table(currentOS);

