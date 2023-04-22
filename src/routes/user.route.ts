import { Router } from 'express';
import { asyncHandler } from '@middlewares/async.middleware';
import userController from '@controllers/user.controller';

const router = Router();

router.get('/users', asyncHandler(userController.findAllUsers));

router.post('/addUser', asyncHandler(userController.addUser));

router.post('/login', asyncHandler(userController.login));

export default router;
