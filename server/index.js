require('dotenv').config();
const express = require ('express');
 const cors = require('cors');

const PORT = process.env.PORT || 6000

const app = express()
app.use(cors())
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
