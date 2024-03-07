import { sign, verify } from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

const secretKey = process.env.secretKey;

const jwtUtils = {
   generateToken: (user) =>{
      const token = sign(user,secretKey, {expiresIn: '1h'});
      return token;
   },

   checkToken: async (token) =>{
      try{
         const decoded = await verify(token,secretKey);
         return decoded;
      } catch(err){
         throw err;
      }
   }
};

export default jwtUtils;

