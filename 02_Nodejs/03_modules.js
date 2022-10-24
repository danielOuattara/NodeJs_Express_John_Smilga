// CommonJS: every file in Nodejs is a module
// Modules  -Encapsulated Code -  only share the minimum

// -------------------------------------------------------

// const john = "John";
// const peter = "Peter";

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

// sayHello("Susan");
// sayHello(john);
// sayHello(peter);

//-----------------------------------------------------------

// const names = require("./folder/names.js");
// const sayHello = require("./folder/sayHello");

// console.log(names);

// console.log(sayHello);

//------------------------------------------------------------

// const sayHello = require("./folder/sayHello");
// const names = require("./folder/names.js");

// console.log(sayHello);
// console.log(names);

// sayHello("Susan");
// sayHello(names.john);
// sayHello(names.peter);

//------------------------------------------------------------

// const sayHello = require('./folder/sayHello');
// const names = require('./folder/names.js')

// const { john, peter } = names
// sayHello("Susan");
// sayHello(john);
// sayHello(peter);
//-----------------------------------------------------------

// const { john, peter } = require("./folder/names.js");
// const sayHello = require("./folder/sayHello");

// console.log(john, peter);

// console.log(sayHello);

//------------------------------------------------------------

const sayHello = require("./folder/sayHello");
const names = require("./folder/names.js");
const objects = require("./folder/object");
const { log } = require("console");

const { john, peter } = names;
sayHello("Susan");
sayHello(john);
sayHello(peter);

console.log(objects);
const { items, person, Person2 } = objects;
console.log(items[0]);
console.log(items[1]);
console.log(person.name);
console.log(Person2);
log("hello");

//--------------------------------------------------------------
