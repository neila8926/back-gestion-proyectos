import  UsuarioModel  from "../../models/usuario/Usuario.models.js";
import bcrypt from 'bcrypt';
import {generateToken} from '../../jwt/tokensUtil.js';

const resolverAuth={
    Mutation:{
        registroUsuario: async (parent,args)=>{
            console.log("registrar usuario");
            const salt =await bcrypt.genSalt(10);

            const hashPassword = await bcrypt.hash(args.password,salt);

            const usuarioCreado = await  UsuarioModel.create({
                nombre:args.nombre,
                apellidos:args.apellidos,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password:hashPassword
            });
            console.log(usuarioCreado)
            return {
                token:generateToken({
                    _id:usuarioCreado._id,
                    nombre:usuarioCreado.nombre,
                    apellidos:usuarioCreado.apellidos,
                    identificacion:usuarioCreado.identificacion,
                    correo:usuarioCreado.correo,
                    rol:usuarioCreado.rol,
                })
            }
        },
        login:async (parent,args)=>{
            console.log(args);
            const usuarioEncontrado = await UsuarioModel.findOne({correo:args.correo});

            if(await bcrypt.compare(args.password,usuarioEncontrado.password)){
                return{
                    token:generateToken({
                        _id:usuarioEncontrado._id,
                        nombre:usuarioEncontrado.nombre,
                        apellidos:usuarioEncontrado.apellidos,
                        identificacion:usuarioEncontrado.identificacion,
                        correo:usuarioEncontrado.correo,
                        rol:usuarioEncontrado.rol, 
                    })
                }
            }
            console.log(args,usuarioEncontrado,comparacion);
        
            return{
                token: "Holis soy el token"
            }
        },
        refreshToken:async(parent,args,context)=>{
          console.log("contexto",context)
          if(!context.userData){
              return{
                  error: 'Token no valido'
              };
          }else{
              return{
                  token:generateToken({
                    _id:context.userData._id,
                    nombre:context.userData.nombre,
                    apellidos:context.userData.apellidos,
                    identificacion:context.userData.identificacion,
                    correo:context.userData.correo,
                    rol:context.userData.rol, 
                })
              }
          }
        },
    }
}
export {resolverAuth}