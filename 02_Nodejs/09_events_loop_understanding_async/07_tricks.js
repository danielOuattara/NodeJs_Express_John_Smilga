
// asynchronous pattern

const http = require("http");

const server = http.createServer((req, res)=> {
    if(req.url === "/") {
        return res.end("Welcome to Nodejs")
    }

    if(req.url === "/about") {
        // BLOCKING CODE: always use an async code , if not the server will be blocked for every one
        for (let i = 0 ; i < 10000; i++) {
            console.log(i)
        }
        return res.end("About us !")
    }

    res.end( `
        <h1>Oops : page not found ! </h1>
        <a href="/"> Home</a>
    `);
    
})

server.listen(5000, () => {
    console.log("Listening on port 5000")
});