import  ProyectoModel  from "../proyecto/Proyecto.models.js";


const resolversProyecto = {
  Query: {
    Proyectos: async (parent,args)=>{
      const proyectos = await ProyectoModel.find()
      .populate('lider')
      .populate('avances')
      .populate('inscripciones');
      return proyectos;
    },
    Proyecto:async (parent,args)=>{
      const proyecto= await ProyectoModel.findOne({_id:args._id})
      return proyecto;
    }
  },

  Mutation: {
    
    crearProyecto: async (parent, args, context) => {
      const proyectoCreado = await ProyectoModel.create({
        nombre: args.nombre,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    editarProyecto: async(parent,args)=>{
      const editarproyecto=await ProyectoModel.findByIdAndUpdate(args._id,
        {
          nombre:args.nombre,
          estado:args.estado,
          presupuesto:args.presupuesto,
        }
         
   /*  editarProyecto:async(parent,args)=>{
      let proyectoModel= new ProyectoModel(args);
      const editarproyecto = ProyectoModel.findByIdAndUpdate(args._id,
        proyectoModel */
      ,{new:true})

      return editarproyecto;
    },
    eliminarProyecto:async(parent,args)=>{
      const eliminarproyecto = await ProyectoModel.findByIdAndDelete(args._id);
      return eliminarproyecto;
    }
  }
  
 
};

export { resolversProyecto };