const multer = require('multer');
const uuid = require('uuid');


const storage = multer.diskStorage({
  destination(req,file,cd){
    cd(null,'images/')
  }, 
  filename(req,file,cd){
    cd(null, uuid.v4() + '-' + file.originalname)
  }
})
 const types = ['image/png', 'image/jpeg', 'image/jpg']

 const fileFilter = (req, fike, cd)=>{
   if(types.includes(file.mimetype)){
     cd(null,true)
   } else {
     cd(null,false)
   }
 }
 module.exports = multer({storage , fileFilter})
