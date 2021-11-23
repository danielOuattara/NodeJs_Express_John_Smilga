
const { readFile } = require("fs");

console.log("start : frist task :");

readFile("./../first.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err);
        return 0;
    }
    console.log(result);
    console.log("end : first task");
});

console.log("start:  second task")