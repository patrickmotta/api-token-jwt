import jwtUtils from "../utils/jwtUtils.js";

const verifyToken = ( req, res, next ) =>{
   const token = req.headers['authorization'];

   if(!token){
      return res.status(401).json({ message: 'Token ausente' })
   }

   jwtUtils.verifyToken(token).then( decoded => {
      req.user = decoded;
      next();
   }).catch(err => {
      return res.status(403).json({ message: 'Token inválido' })
   });
}

export default verifyToken;