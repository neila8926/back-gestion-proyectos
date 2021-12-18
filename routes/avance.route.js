const express = require('express');
const AvanceModel = require('../models/Avance.models');
const {crearAvance}= require('../controllers/avance.controllers')
const {consultarAvance}=require('../controllers/avance.controllers')
const {actualizarAvance}=require('../controllers/avance.controllers');



let api=express.Router();

//Crear Avance
api.post('/api/avance/',crearAvance)
//Consultar todas las Avance
api.get('/api/avance/',consultarAvance)
//Actualizar Avance
api.put('/api/avance/:id',actualizarAvance)

module.exports=api;