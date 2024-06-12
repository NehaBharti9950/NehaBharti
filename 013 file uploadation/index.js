const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Product = require('./models/product');

 mongoose.connect('mongodb+srv://nehabharti9950:4gJKAiCnBAw6rpZr@neha.h1fcwtg.mongodb.net/file_upload_tmp?retryWrites=true&w=majority&appName=neha')
 .then(()=>{
       console.log('database connected');
 })
 .catch((error)=>{
       console.log(error);
 })

const app = express();

const multerStorage = multer.diskStorage({
       destination:function(req,file,next){
              next(null,'uploads');
       },
       filename:function(req,file,next){
              const splitArr = file.originalname.split('.');
              const fileExtenstion = splitArr[splitArr.length - 1];
              // console.log(fileExtenstion);
              next(null, Date.now() + '.' + fileExtenstion);
       }
})

const upload = multer({storage:multerStorage}).single('thumbnail');

app.use(express.json());

app.use('uploads',express.static('uploads'));

app.post('/insert_single_file',upload,async(req,res)=>{
       try{
              const { name } = req.body;
      
              const productData = new Product({
                  name,
                  thumbnail:req.file.filename
              });
              console.log(req.file.filename)
      
              const response = await productData.save();
              res.status(200).json({message:'data inserted successfully', data:response});
          }
          catch(error){
              console.log(error);
              res.status(500).json({message:'internal server error'});
          }
})


app.get('/read_file_data',async(req,res)=>{
       try{
              const response = await Product.find();

              const dataWithPath = response.map((data)=>{
                     data.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${data.thumbnail}`;
                     return data;
              })
              res.status(200).json({message:'data fetched successfully', data:'response'});
              console.log(`${req.protocol}://${req.get('host')}/uploads`);
       }
       catch(error){
              console.log(error);
              res.status(500).json({message:'internal server error'});
       }
})

app.listen(5400,()=>{
       console.log("server is running on port on 5400");
})