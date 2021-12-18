import  UsuarioModel  from "./Usuario.models.js";
import ProyectoModel from "../proyecto/Proyecto.models.js";

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UsuarioModel.find();
      return usuarios;
    },
    Usuario:async (parent,args)=>{
      const usuario= await UsuarioModel.findOne({_id:args._id})
      return usuario;
    },
    UsuariosPendientes: async(parent,args)=>{
      const usuarios=await UsuarioModel.find({estado:'PENDIENTE'});
      return usuarios;
    },
    Proyectos: async (parent,args)=>{
      const proyectos = await ProyectoModel.find().populate('lider');
      return proyectos;
    }
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UsuarioModel.create({
        nombre:args.nombre,
        apellidos:args.apellidos,
        identificacion:args.identificacion,
        correo:args.correo,
        estado:args.estado,
        rol:args.rol
      });

      if (Object.keys(args).includes('estado')){
        usuarioCreado.estado=args.estado
      }
      console.log("Se ha creando un Usuario")
      return usuarioCreado;
    },

   
    editarUsuario: async(parent,args)=>{
      const usuarioEditado=await UsuarioModel.findByIdAndUpdate(args._id,
        {
          nombre:args.nombre,
          apellidos:args.apellidos,
          identificacion:args.identificacion,
          correo:args.correo,
          estado:args.estado,
        },
        {new:true});
        
        console.log("Se ha editado el usuario");

        return usuarioEditado;
    },
    eliminarUsuario: async(parent,args)=>{
      let usuarioEliminado=null;
      if(Object.keys(args).includes('_id')){
         usuarioEliminado=await UsuarioModel.findByIdAndDelete(args._id);
      }else if(Object.keys(args).includes('correo')){
         usuarioEliminado = await UsuarioModel.findOneAndDelete({correo:args.correo});
      }
      console.log("Se ha eliminado el usuario");
      return usuarioEliminado
  
    },

    
  }
  
 
};

export { resolversUsuario};