const express = require('express');

require ('dotenv').config();

const path = require('path');


const app = express();



const htmlPath = path.join(__dirname,'public');

app.use(express.static(htmlPath));

app.get('/',(req,res)=>{
       res.sendFile(`${htmlPath}/index.html`);
})

app.get('/aboutUs',(req,res)=>{
       res.sendFile(`${htmlPath}/aboutUs.html`);
})

app.get('/Courses',(req,res)=>{
       res.sendFile(`${htmlPath}/Courses.html`);
})

app.get('/Enquiry',(req,res)=>{
       res.sendFile(`${htmlPath}/Enquiry.html`);
})

app.get('/contactUs',(req,res)=>{
       res.sendFile(`${htmlPath}/contactUs.html`);
})

app.get('/Gallery',(req,res)=>{
       res.sendFile(`${htmlPath}/Gallery.html`);
})

app.get('/*',(req,res)=>{
       res.sendFile(`${htmlPath}/404.html`);
})

app.listen(process.env.PORT,()=>{
       console.log(`server is running on port ${process.env.PORT}`)
});
