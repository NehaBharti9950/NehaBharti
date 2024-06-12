const multer = require('multer');

const abc = multer.diskStorage({
       destination:function(req,file,cb){
              cb(null,"uploads");
       },
       filename:function(req,file,cb){
              const newName = Date.now() + file.originalname;

              cb(null,newName);
       }
});

// Single File Uploadation
// const upload = multer({storage:abc}).single('thumbnail');

// Multiple File Uploadation
// const upload = multer({storage:abc}).array('images',10);

// Multiple File and Single  File Uploadation
const upload = multer({storage:abc}).fields([
       {name:'thumbnail', maxCount:1},
       {name:'images', maxCount:5}
]);
   
module.exports = upload;
