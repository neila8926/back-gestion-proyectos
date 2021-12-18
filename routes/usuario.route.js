const express = require('express');
const UsuarioModel = require('../models/Usuario.models');
const {crearUsuario,listarUsuario,actualizarUsuario,eliminarUsuario}= require('../controllers/usuario.controllers')


let api=express.Router();

//Crear usuarios
api.post('/api/usuario',crearUsuario)
//Consultar todos los usuarios
api.get('/api/usuario',listarUsuario)
//Actualizar usuarios
api.put('/api/usuario/:id',actualizarUsuario)
//Eliminar Usuario
api.delete('/api/usuario/:id',eliminarUsuario)

module.exports=api;