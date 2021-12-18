const InscripcionModel = require('../models/inscripcion/Inscripcion.models');

const crearInscripcion = async (req,res) => {
   
        let inscripcion=req.body;
        console.log(inscripcion)
        try{
            let inscripcionModel = new InscripcionModel(inscripcion);
            let inscripcionCreado = await inscripcionModel.save();
            res.send({
                inscripcionCreado
            })
        }catch(error){
            console.log(`Error al crear el usuario en la BD:  ${error}`)
        }
        
    
}
const consultarInscripcion = async (req,res) => {
    try {
        let inscripciones = await  InscripcionModel.find();
        res.status(200).send({
            inscripciones
        })
    } catch (error) {
        console.log(`Error al consultar inscripciones en la BD: ${error}`)
    }
   
}
const actualizarInscripcion = async(req,res)=>{
    let inscipcionId=req.params.id;
    let dataNew=req.body
    let inscripcionActualizada= await InscripcionModel.findByIdAndUpdate(inscipcionId,dataNew,{new:true});

    res.status(200).send({
        inscripcionActualizada
    })
}
module.exports={
    crearInscripcion, consultarInscripcion, actualizarInscripcion
}