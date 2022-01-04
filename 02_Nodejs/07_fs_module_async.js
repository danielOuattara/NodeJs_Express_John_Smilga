 

const { readFile, writeFile } = require("fs");
// const { result } = require("lodash");

readFile("./folder/01_first.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err.message);
        return 0;
    }
    const first = data;

    readFile("./folder/02_second.txt", "utf8", (err, data) => {
        if (err) {
            return console.log(err.message); 
        }
        const second = data;

        writeFile ("./folder/03_third_async.txt", `Here the result : ${first}, ${second}`, (err) => {
            if (err) {
                return console.log(err.message);
            }
            readFile("./folder/03_third_async.txt", "utf8", (err, data) => {
                if (err) {
                    return console.log(err.message);
                }
                console.log(data);
            });
        });
    })
});

