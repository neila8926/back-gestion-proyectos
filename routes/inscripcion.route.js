const express = require('express');
const AvanceModel = require('../models/Inscripcion.models');
const {crearInscripcion}= require('../controllers/inscripcion.controller')
const {consultarInscripcion}=require('../controllers/inscripcion.controller')
const {actualizarInscripcion}=require('../controllers/inscripcion.controller')


let api=express.Router();

//Crear Inscripcion
api.post('/api/inscripcion/',crearInscripcion)
//Consultar todas las inscripciones
api.get('/api/inscripcion/',consultarInscripcion)
//Actualizar inscrpcion
api.put('/api/inscripcion/:id',actualizarInscripcion)

module.exports=api;