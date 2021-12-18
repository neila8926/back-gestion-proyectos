const AvanceModel = require('../models/Avance.models');

const crearAvance= async (req,res) => {
   
        let avance=req.body;
        console.log(avance)
        try{
            let avanceModel = new AvanceModel(avance);
            let avanceCreado = await avanceModel.save();
            res.send({
                avanceCreado
            })
        }catch(error){
            console.log(`Error al crear el usuario en la BD:  ${error}`)
        }
        
    
}
const consultarAvance = async (req,res) => {
    try {
        let avances = await  AvanceModel.find();
        res.status(200).send({
            avances
        })
    } catch (error) {
        console.log(`Error al consultar avances en la BD: ${error}`)
    }
   
}
const actualizarAvance = async(req,res)=>{
    let avanceId=req.params.id;
    let dataNew=req.body
    let avanceActualizada= await AvanceModel.findByIdAndUpdate(avanceId,dataNew,{new:true});

    res.status(200).send({
        avanceActualizada
    })
}
module.exports={
    crearAvance, consultarAvance, actualizarAvance
}