import { gql } from "apollo-server-core";

const typeProyectos = gql`
  
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  scalar Date

 
  type Proyecto{
    _id:String!
    nombre:String!
    presupuesto:Float!
    fechaInicio:Date!
    fechaFin:Date!
    estado:Enum_EstadoProyecto
    fase: Enum_FaseProyecto!
    lider:Usuario
    objetivosGenerales: String
    objetivosEspecificos: [String!]!
    avances:[Avance]
    inscripciones:[Inscripcion]

  }

  type Query {
    Proyectos:[Proyecto]
    Proyecto(_id:String!):Proyecto
  }

  type Mutation {
    

    crearProyecto(
      nombre:String!
      presupuesto:Float!
      fechaInicio:Date!
      fechaFin:Date!
      estado:Enum_EstadoProyecto
      fase: Enum_FaseProyecto!
      lider:String! 
      objetivosGenerales: String!
      objetivosEspecificos: [String!]!
    ):Proyecto

    editarProyecto(
      _id:String!
      nombre:String
      presupuesto:Float
      fechaInicio:Date
      fechaFin:Date
      estado:Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider:String
      objetivosGenerales: String
      objetivosEspecificos: [String]
    ):Proyecto

    eliminarProyecto(_id:String!):Proyecto

  }
`;

export { typeProyectos };
