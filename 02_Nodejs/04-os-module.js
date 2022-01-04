
console.log("\n\n======================================================\n\n")
const os = require("os");

// console.log(os);

console.log( 'os = ', os);

console.log("\n\n======================================================\n\n")

// current user info
const user = os.userInfo()
console.log( "user = ", user)

console.log("\n\n======================================================\n\n")
// method returns the system uptime in seconds
console.log(`System has been running since ${os.uptime()} seconds`)

console.log("\n\n======================================================\n\n")

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.table(currentOS);

