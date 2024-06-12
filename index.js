// importaciones
const connection = require('./database/connection')
const express = require('express')
const cors = require('cors')
//Conexion a la base
console.log("conexion ")
connection()

//crear el servidor
const app = express()
const port = 3900;
//configuracion de cors: permite que las peticiones se haga correcta 
app.use(cors())

//conversion de datos (body a objetos js)
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//configuracion de ruta