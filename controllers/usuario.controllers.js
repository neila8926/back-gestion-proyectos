const UsuarioModel = require('../models/Usuario.models');

const crearUsuario=async (req,res)=>{
   
        let usuario=req.body.usuario;
        console.log(usuario)
        try{
            let usuarioModel = new UsuarioModel(usuario);
            let usuarioCreado = await usuarioModel.save();
            res.send({
                usuarioCreado
            })
        }catch(error){
            console.log(`Error al crear el usuario en la BD:  ${error}`)
        }
        
    
}
const listarUsuario = async(req,res)=>{
    
    try {
        let usuariosEncontrados = await UsuarioModel.find();
        res.status(200).send({
            usuariosEncontrados
        })
    } catch (error) {
        console.log(`Error al listar los usuarios ${error}`)
    }
}

const actualizarUsuario = async(req,res)=>{
    try {
        
        let clienteId=req.params.id;
        let datosNuevos=req.body
        let usuarioActualizado= await UsuarioModel.findByIdAndUpdate(clienteId,datosNuevos,{new:true});
    
        res.status(200).send({
            usuarioActualizado
        })  
        
    } catch (error) {
        
    }
}

const eliminarUsuario = async(req,res)=>{
    try {
        
        let clienteId=req.params.id;
       
        let usuarioEliminado= await UsuarioModel.findByIdAndDelete(clienteId,{new:true});
    
        res.status(200).send({
            usuarioEliminado
        })  
        
    } catch (error) {
        
    }
}
module.exports={
    crearUsuario,
    listarUsuario,
    actualizarUsuario,
    eliminarUsuario
}