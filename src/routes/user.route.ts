import { Router } from 'express';
import { asyncHandler } from '@middlewares/async.middleware';
import userController from '@controllers/user.controller';

const router = Router();

router.get('/', asyncHandler(userController.findAllUsers));

export default router;
