import { gql } from "apollo-server-core";

const typeInscripcion = gql`
  enum Enum_InscripcionProyecto {
    ACEPTADA
    RECHAZADA
  }

  scalar Date

  type Inscripcion {
    _id: ID!
    estado: Enum_InscripcionProyecto!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_InscripcionProyecto!
      fechaIngreso: Date!
      fechaEgreso: Date!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    editarInscripcion(
      _id: ID!
      estado: Enum_InscripcionProyecto
      fechaIngreso: Date
      fechaEgreso: Date
      proyecto: String
      estudiante: String
    ): Inscripcion

    eliminarInscripcion(_id: String!): Inscripcion
    
    aceptarInscripcion(_id:String):Inscripcion
  }
`;

export { typeInscripcion };
