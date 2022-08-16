require('dotenv').config();
const express = require ('express');
 const cors = require('cors');
 const path = require('path');
 const fileUpload = require('express-fileupload');
const indexRouter = require('./routes/indexRouter')

const PORT = process.env.PORT || 6000

const app = express()
app.use(cors( {origin: ['http://localhost:3000'],credentials: true,}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(fileUpload());
app.use('/api', indexRouter);

app.get('*',(req,res)=>{res.sendFile(path.resolve('../client/build/index.html'))})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
