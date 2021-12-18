const ProyectoModel = require("../models/proyecto/Proyecto.models");

const crearProyecto = async (req, res) => {
  const proyecto = req.body;
  try {
    const newProyecto = new ProyectoModel(proyecto);
    await newProyecto.save();
    console.log("Pryecto creado con exito", newProyecto);
    res.json(newProyecto);
  } catch (error) {
    console.error("Error Creado proyecto", error);
  }
};

const getProyectos = async (req, res) => {
  try {
    const proyectos = await ProyectoModel.find().populate("lider");
    console.log("Obteniendo Proyectos");
    res.json(proyectos);
  } catch (error) {
    console.error("Error al consultar proyectos", error);
  }
};

const updateProyecto = async (req, res) => {
  const id = req.params.id;
  const { objetivosGenerales } = req.body;
  try {
    const updateProyecto = await ProyectoModel.findByIdAndUpdate(
      id,
      { objetivosGenerales },
      { new: true }
    );
    res.json(updateProyecto)
  } catch (error) {
    console.error('Error al actualizar proyecto',error)
  }
};

module.exports = {
  crearProyecto,
  getProyectos,
  updateProyecto
};
