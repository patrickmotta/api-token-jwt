import { Router } from 'express';
import productController from '../controllers/productController';
import authenticationMiddleware from '../middleware/authentication';

const router = Router()

router.get('/produto', authenticationMiddleware, productController.getProduct);

export default router;