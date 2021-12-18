import  mongoose from 'mongoose'
const {Schema,model} = mongoose;

const inscripcionSchema = new Schema({
    estado:{
        type:String,
        enum: ["ACEPTADA","RECHAZADA"],
        required:true
    },
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaEgreso:{
        type:Date,
        required:true
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:'Proyecto',
        required:true
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    }
    
});

const InscripcionModel = model('Inscripcion',inscripcionSchema);

export default InscripcionModel;