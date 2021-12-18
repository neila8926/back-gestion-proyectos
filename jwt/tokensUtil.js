import jwt from 'jsonwebtoken';

const validarToken=(token)=>{
    if(token){
        const verificacion = jwt.verify(token,'secret',(error,data)=>{
            if(data){
                return{ data: data}
            }
            if(error){
                return {error: error}
            }
            console.log(error);
        });
        console.log(verificacion);
        return verificacion;
        
    }
}

const generateToken =(payload)=>{
    return jwt.sign(payload,'secret',{
        expiresIn: '24h'
    });
};
export {generateToken,validarToken}