import mongoose from 'mongoose';

const connectDB=async()=>{
   return  await mongoose.connect(process.env.DB_URI2)
   .then(()=>{
       console.log("Conexión exitosa");
   })
   .catch((err)=>{
       console.log(`Error conectando a la Base de Datos ${err}`)
   })
}
export default connectDB