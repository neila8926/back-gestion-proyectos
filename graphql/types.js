import { gql } from "apollo-server-core";


import { typeUsuario } from "../models/usuario/types.js";
import { typeProyectos } from "../models/proyecto/types.js";
import { typeInscripcion } from "../models/inscripcion/types.js";
import { typeAvance } from "../models/avance/types.js";
import {typeAuth} from "./auth/type.js";


const typeGlobales = gql`
  scalar Date
`;


export const tipos = [
  typeGlobales,
  typeUsuario,
  typeProyectos,
  typeInscripcion,
  typeAvance,
  typeAuth

];

