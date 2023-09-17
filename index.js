"use strict";

const http = require("node:http"); // builtin: https://nodejs.org/api/http.html

// http.createServer((req, res) => { ... }
// const app = http.createServer((request, response) => {
//   response.end("<h1> Welcome to NodeJS Server </h1>");
// });

// app.listen(8000, () => console.log("Server Runned: http://127.0.0.1:8000"));

// ----------------------------------------------------------------------------------------

const app = http
  .createServer((req, res) => {
    // console.log(req);
    // console.log(res);
    console.log(req.url)
    if(req.url=='/'){
      res.end("main page")
    }
    else if(req.url=="/second"){
      res.end("second page")
    }
    else{
      res.end("Server is running");
    }

    
  })
  .listen(8000, () => console.log("Server Runned: http://127.0.0.1:8000"));
