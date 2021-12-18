import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import {tipos} from './graphql/types.js';
import {resolvers} from './graphql/resolvers.js';

import {validarToken} from './jwt/tokensUtil.js';


dotenv.config();

//Definir un servidor de apollo y graphql
const getUsuarioData= (token)=>{
   // const token ='das'
    const verificacion = validarToken(token.split(' ')[1]);
    if(verificacion.data){
        return verificacion.data
    }else{
        return null
    }
}
const serverApollo = new ApolloServer({
    typeDefs: tipos,
    resolvers:resolvers,
    context: ({req})=>{
        //obtener el token desde la varieble req
        const token = req.headers?.authorization ?? null;
        if(token){
            const userData = getUsuarioData(token);
            if(userData){
                return{userData}
            }
        }
        
       return null
    }
})

const app = express();
app.use(cors())

app.set('port', process.env.PORT || 5000);



app.listen(app.get('port'), async()=>{
    await connectDB();
    //encender servidor de apollo
    await serverApollo.start();
    //midellware para que utilice los midellware de express
    serverApollo.applyMiddleware({app});

    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})
    
