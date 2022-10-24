console.log("first task");
console.time();
for (let i = 0; i < 1000000000; i++) {
  i = i;
}

console.timeEnd();

console.log("second task");
