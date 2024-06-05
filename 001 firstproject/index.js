const http = require('http');

http.createServer((req,res) =>{
       res.end("Welcome to BackEnd Course");
}).listen(5000);