const insertProduct = async(req,res)=>{
       try{
              const {} = req.body;
              res.status(200).json({message:'product inserted'});
       }
       catch{
              res.status(500).json({message:'internal server Error'}); 
       }  
};

module.exports = insertProduct;