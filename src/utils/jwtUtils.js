import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

const secretKey = process.env.secretKey;

const jwtUtils = {
   generateToken: (user) =>{
      const token = jwt.sign(user,secretKey, {expiresIn: '10m'});
      return token;
   },

   checkToken: async (token) =>{
      try{
         const decoded = await jwt.verify(token,secretKey);
         return decoded;
      } catch(err){
         throw err;
      }
   }
};

export default jwtUtils;

