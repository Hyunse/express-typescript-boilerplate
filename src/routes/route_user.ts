import { Router, Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/User/controller_user';

const router: Router = Router();

router.get(
  '/users',
  asyncHandler(async (req: Request, res: Response) => {
    
    userController.get();

    res.send('');
  })
);

export default router;
