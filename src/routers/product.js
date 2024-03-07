import { Router } from 'express';
import productController from '../controllers/productController.js';
import authenticationMiddleware from '../middleware/authentication.js';

const router = Router()

router.get('/produto', authenticationMiddleware, productController.getProduct);

export default router;