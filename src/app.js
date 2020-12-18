require('dotenv').config();
const express= require('express');
const cors=require('cors');
const ConnectionDb= require('./ConectionDB/MongoDb');
const { appConfig,db } = require('./Config/Config');
const app=express();

//Middlewares
app.use(express.json({limit:'20mb'}))
app.use(cors())

//Base de datos
ConnectionDb(db);


//Escuchar servidor puerto
app.listen(appConfig.port,()=>{
    console.log("Server escuchando por "+appConfig.port)
})