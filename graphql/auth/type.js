import { gql } from "apollo-server-core";


const typeAuth = gql`

type Token{
    token:String
    error:String
}
type Mutation {
    registroUsuario (
      nombre: String!
      apellidos: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
      password:String!
    ): Token!

    login(
      correo:String!
      password:String!
    ):Token

    refreshToken:Token
}
 `;

 export {typeAuth}