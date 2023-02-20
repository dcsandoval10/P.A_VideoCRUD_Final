const express = require('express')
const app = express()

//Importar conexion DB
const archivoDB = require('./conexion')

//Importacion del archivo de rutas y modelo
const rutausuario = require('./rutas/usuario')


//Importacion body parser
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get ('/',(req, res) => {
    res.end('Bienvenidos servidor corriendo')
})

app.listen(5000, function () { 
    console.log ('el servidor node esta corriendo')
})