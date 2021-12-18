import { gql } from "apollo-server-core";

const typeAvance = gql `

type Avance{
    _id: ID!
    fecha: Date!
    descripciones: String!
    observaciones: [String]
    proyecto: Proyecto!
    usuarioCreador:Usuario!
}

type Query{
    Avances:[Avance]
}
type Mutation{
    crearAvance(
        fecha: Date!
        descripciones: String!
        proyecto: String!
        usuarioCreador: String!

    ):Avance

    editarAvance(
        _id: String!
        fecha: Date
        descripciones: String
        observaciones: String
        proyecto: String
        usuarioCreador: String

    ):Avance

    eliminarAvance(_id:String!):Avance
}
`;
export {typeAvance};