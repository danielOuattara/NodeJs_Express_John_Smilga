// asynchronous pattern

// const { readFile } = require("fs");

// readFile("./../folder/01_first.txt", "utf8", (err, data) => {
//   if (err) {
//     return err.message;
//   } else {
//     console.log(data);
//   }
// });

//=======================================================

// asynchronous pattern

/* Promises
--------------*/

// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./../folder/01_first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

//=========================================================================

/* Async/ Await 
----------------*/

// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const reader = async () => {
//   const first = await getText("./../folder/01_first.txt");
//   console.log(first);
// };

// reader();

//----------------------------------------------------------------

// try...catch

// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const reader = async () => {
//   try {
//     const first = await getText("./../folder/01_first.txt");
//     console.log(first);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// reader();

//-----------------------------------------------------------------

// try...catch

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const reader = async () => {
//   try {
//     const first = await readFilePromise("./../folder/01_first.txt", "utf8");
//     const second = await readFilePromise("./../folder/02_second.txt", "utf8");
//     await writeFilePromise(
//       "./../folder/05_fifth.txt",
//       `This is async/await\n${first}${second}`
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

// reader();

//=========================================================================

const { readFile, writeFile } = require("fs").promises;

const reader2 = async () => {
  try {
    const third = await readFile("./../folder/01_first.txt", "utf8");
    const fourth = await readFile("./../folder/02_second.txt", "utf8");
    await writeFile(
      "./../folder/06_fifth.txt",
      `This is async/await \n${third}${fourth}`
    );
    console.log("done");
  } catch (err) {
    console.log(err);
  }
};

reader2();
