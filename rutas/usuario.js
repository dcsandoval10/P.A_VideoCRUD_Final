const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaPelicula = new eschema({
    movieID: String,
    titleMovie: String,
    year: String,
    duration: String,
    lang: String,
    release: String,
    country: String
})

const ModeloPelicula = mongoose.model('pelicula', eschemaPelicula)
module.exports = router

router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})

router.post('/agregarpelicula', (req, res) => {
    const nuevapelicula = new ModeloPelicula({
        movieID: req.body.movieID,
        titleMovie: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        release: req.body.release,
        country: req.body.country
    })
    nuevapelicula.save(function (err) {
        if (!err) {
            res.send('Usuario agregado correctamente')
        }
        else {
            res.send(err + 'ERROR EN USUARIO.JS')
        }
    })
})

router.get('/obtenerpeliculas', (req, res) => {
    ModeloPelicula.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})


router.post('/obtenerdatapelicula', (req, res) => {
    ModeloPelicula.find({ movieID: req.body.movieID }, function (docs, err) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})

router.post('/updatemovie', (req, res) => {
    ModeloPelicula.findOneAndUpdate({ movieID: req.body.movieID }, {
        movieID: req.body.movieID,
        titleMovie: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        release: req.body.release,
        country: req.body.country
    }, (err)=>{
        if (!err) {
            res.send('Usuario agregado correctamente')
        }
        else {
            res.send(err + 'ERROR EN USUARIO.JS')
        }
    })  
})

router.post( '/deletemovie', (req,res)=> {
    ModeloPelicula.findOneAndDelete({movieID:req.body.movieID}, (err) => {
        if(!err){
            res.send('pelicula eliminada')
        }
        else {
            res.send(err)
        }
    })
})