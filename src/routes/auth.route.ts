import { Router } from 'express';
import { asyncHandler } from '@middlewares/async.middleware';
import authController from '@/controllers/auth.controller';

const router = Router();

router.post('/signup', asyncHandler(authController.signup));

router.post('/signin', asyncHandler(authController.signin));

export default router;
