const express = require('express')

const app = express();


app.get('/',(req,res)=>{
       res.send('Hello');
})


app.get('/home',(req,res)=>{
       res.send("Hello Home")
})


app.post('/home',(req,res)=>{
       res.send("Hello Home Post Method")
})


app.post('/',(req,res)=>{
       res.send("Hello Post Method")
})

app.listen(5200,()=>{
       console.log('server is running on port 5200');
})