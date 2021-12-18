import InscripcionModel from "./Inscripcion.models.js";

const resolversInscripcion = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscripcionModel.find()
        .populate("estudiante")
        .populate({ path: "proyecto", populate: "lider" });
      return inscripciones;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionModel = new InscripcionModel(args);
      const inscripcion = await inscripcionModel.save();
      return inscripcion;
    },

    editarInscripcion: async (parent, args) => {
      const inscripcion = await InscripcionModel.findByIdAndUpdate(
        args._id,
        args,
        {
          new: true,
        }
      );
      return inscripcion;
    },

    eliminarInscripcion: async (parent, args) => {
      const inscripcion = await InscripcionModel.findByIdAndDelete(args._id);
      return inscripcion;
    },
    aceptarInscripcion:async (parent,args)=>{
      const inscripcionAceptada= await InscripcionModel.findByIdAndUpdate(args._id,{
        estado:'ACEPTADA',
        fechaIngreso:Date.now()
      },{new:true});
      return inscripcionAceptada;
    }
  },
};

export { resolversInscripcion };
