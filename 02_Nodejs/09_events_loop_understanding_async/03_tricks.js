const { readFile } = require("fs");

console.log("start : first task :");

readFile("./../folder/01_first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return 0;
  }
  console.log(result);
  console.log("end of first task");
});

console.log("start:  second task");
