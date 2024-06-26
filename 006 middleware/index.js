const express = require('express')

const app = express();

const token = 'e5432';

const checkToken = (req,res,next)=>{

       const  userToken = req.params.val;
       if(!userToken){
              res.status(400).json({msg:'Please Add token'})
       }
       else if(userToken != token)
       {
              res.status(401).json({msg:'Invalid Token'})
       }
       else{
              next();
       }  
}

app.get("/user/:val?",checkToken,(req,res)=>{
       res.status(200).json({msg:'Api fetched successfully'})
})

app.get("/admin/:val?",checkToken,(req,res)=>{
       res.status(200).json({msg:'Api fetched successfully'})
})

app.get("/client/:val?",checkToken,(req,res)=>{
       res.status(200).json({msg:'Api fetched successfully'})
})

app.listen(5500,()=>{
       console.log('server is running on port 5500')
})