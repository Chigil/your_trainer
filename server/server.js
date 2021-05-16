require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=> {
    res.status(200).json({message:'Working!'})
})
.listen(3000,()=> console.log('Сервер работает'));