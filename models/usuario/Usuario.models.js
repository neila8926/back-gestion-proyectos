import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const validacionEmail=function(correoElectronico){
    const exp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return exp.test(correoElectronico);
}
const userSchema= new Schema({
    correo: {
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        validate:[validacionEmail,'Ingrese un correo electronico valido']
    },
    identificacion:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true,
        enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
    },
    estado:{
        type:String,
        enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
        default: "PENDIENTE"
    },
    password:{
        type: String,
        required:true
    }
});

const UsuarioModel=model('Usuario',userSchema);

export default UsuarioModel;