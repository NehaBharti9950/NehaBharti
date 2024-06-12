const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
require('./config');

const app = express();

const upload = require('./middleware/multer');
app.post('/insert_product', upload, (req,res)=>{
    try{
        res.status(200).json({message:'file uploaded'});
    }
    catch(error){
        console.log(error);
    }  
})

app.listen(5900,()=>{
       console.log('server is runnning on port 5900')
})

