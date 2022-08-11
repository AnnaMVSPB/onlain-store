const fileupload = require('express-fileupload');
const path = require('path');
const util = require('util')
const storageMulter = require('../middlewares/storage.milter')
const nodemailer = require ('nodemailer');
const { getMaxListeners } = require('process');

async function addProduct (req, res) {
try {
  const file = req.files.homesImg
  file.forEach  (async el => {
    let url = await storageMulter(el)
   
  });

  res.json({ message: 'картинки успешно загружены',});

} catch (error) {
  res.json({er:error})
}
  
}

const sendMessage = async (req, res) => {
  const {name}= req.body
  try {
   const transporter = nodemailer.createTransport({
     service:'gmail',
     auth:{
       user:'belka.anka91@gmail.com',
       pass:'ovofqkagifdkkqum'
     }
   })
   const mailOptions ={
     from:'belka.anka91@gmail.com',
     to:'belka.anka91@gmail.com',
     subject:"это супер письмо",
     text:"привет Кирюха и Русик",
     html: `
     <div>
       <h1>привет</h1>
       <h2>${name}</h2>
     </div>
 `,

   }
   transporter.sendMail(mailOptions)
      res.status(201).json({m:'sdfghj'});
 
  } catch (err) {
    res.status(500).json({ err, message: 'Ошибка занесения данных' });
  }
 
}
 
 
  
 


module.exports = { addProduct ,sendMessage}
