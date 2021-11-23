
// const http = require("http");

// const fs = require("fs");

// http.createServer((req, res) => {
//     const text = fs.readFileSync("./folder/hugeFile.txt", "utf8");
//     res.end(text);
// }).listen(5000, ()=> {
//     console.log("Listening on 5000")
// })


// ========================================================

const http = require("http");

const fs = require("fs");

http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./folder/hugeFile.txt", "utf8")
    fileStream.on("open", ()=> {
        fileStream.pipe()
    })
    fileStream.on("error", (err)=> {
        res.end(err)
    })

}).listen(5000)
