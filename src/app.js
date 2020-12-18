require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ConnectionDb = require('./ConectionDB/MongoDb')
const { appConfig, db } = require('./Config/Config')
const indexRouter = require('./Routes/index')
const app = express()

// Middlewares
app.use(express.json({ limit: '20mb' }))
app.use(cors())

// Base de datos
ConnectionDb(db)

// Rutas
app.use('/api', indexRouter)
// Escuchar servidor puerto
app.listen(appConfig.port, () => {
  console.log('Server escuchando por ' + appConfig.port)
})
