import AvanceModel from "../avance/avance.models.js";


const resolversAvance = {
    Query: {
      Avances: async (parent,args)=>{
        const avances = await AvanceModel.find().populate('proyecto').populate('usuarioCreador');
        return avances;
      }
    },
  
    Mutation: {
      
      crearAvance: async(parent,args)=>{
        const avancecreado = AvanceModel.create({
            fecha: args.fecha,
            descripciones: args.descripciones,
            proyecto: args.proyecto,
            usuarioCreador: args.usuarioCreador,
        })
        ;
        return avancecreado
      },
      editarAvance: async(parent,args)=>{
        const avanceEditado=await AvanceModel.findByIdAndUpdate(args._id,
          {
            fecha: args.fecha,
            descripciones: args.descripciones,
            proyecto: args.proyecto,
            observaciones: args.observaciones,
            UsuarioCreador: args.usuarioCreador,
          },
          {new:true});
          
          console.log("Se ha editado un avance");
  
          return avanceEditado;
      },
      eliminarAvance:async(parent,args)=>{
        const avance = await AvanceModel.findByIdAndDelete(args._id);
        return avance;
      }
    }
    
   
  };
  
  export { resolversAvance };

