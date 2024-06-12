const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nehabharti9950:4gJKAiCnBAw6rpZr@neha.h1fcwtg.mongodb.net/file_upload_tmp?retryWrites=true&w=majority&appName=neha')

.then(()=>{
       console.log('database connected');
})
.catch((error)=>{
       console.log(error);
});