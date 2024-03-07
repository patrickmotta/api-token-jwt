import jwtUtils from "../utils/jwtUtils";

const authenticationController = {
   login: (req, res) => {
      //apenas simulando a logica de autenticação.
      const user = {
         id: 1,
         username: 'testeLogin',
         permissions: ['reading']
      }

      const token = jwtUtils.generateToken(user);

      res.json({token});
   }
}

export default authenticationController;