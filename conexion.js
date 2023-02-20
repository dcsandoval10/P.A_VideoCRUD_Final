const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/videocrud');

const objetodb = mongoose.connection

objetodb.on ('connected', ()=>{console.log('conexion correcta a MongoDB')})
objetodb.on ('error', ()=>{console.log('Error en la conexion con mongoDB')})

module.exports = mongoose