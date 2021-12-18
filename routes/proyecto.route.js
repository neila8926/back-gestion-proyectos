const { Router } = require('express');
const { crearProyecto, getProyectos, updateProyecto } = require('../controllers/proyecto.controllers');
const router = Router();

router.post('/api/proyectos', crearProyecto)
router.get('/api/proyectos', getProyectos)
router.put('/api/proyectos/:id', updateProyecto)

module.exports = router;
