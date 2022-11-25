import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/controller_user';

const router = Router();

router.get('/users', asyncHandler(userController.findAllUsers));

router.post('/addUser', asyncHandler(userController.addUser));

export default router;
