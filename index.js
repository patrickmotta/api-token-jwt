import express from 'express';
import productRoutes from './src/routers/product';
import authenticationController from './src/controllers/authenticationController';

const app = express();
const port = 6000;

app.use(express.json());

app.use('/api', productRoutes);

app.post('/api/login', authenticationController.login);

app.listen(port, () =>{
   console.log(`Servidor rodando na porta ${port}`)
})
