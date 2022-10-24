// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log("data received");
// });

// customEmitter.emit("response");

//===================================================

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log("data received");
// });
// customEmitter.on("response", () => {
//   console.log("data received again");
// });
// customEmitter.on("response", () => {
//   console.log("data received 3rd time");
// });

// customEmitter.emit("response");

//===================================================

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("event sent !");
});
customEmitter.on("response", (name, age) => {
  console.log(`data received => user : ${name} with age : ${age}`);
});

customEmitter.emit("response", "daniel", 37);
customEmitter.emit("response", 37, "danielB"); // caution  order of parameters !
