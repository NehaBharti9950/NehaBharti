const http = require('http');

const url =require('url')

 

const server = (req,res)=>{
       const param = url.parse(req.url, true);
       console.log(req.methods)
       res.end('hello');
       if(req.method == 'GET' && param.href == '/home'){
              res.end('get called home');
       }
       else if(req.method == 'POST'){
                     res.end('post called');    
       }
       else if(req.method == 'POST' && param.href == '/about'){
              res.end('post called about');    
       }
}
http.createServer(server).listen(5015);