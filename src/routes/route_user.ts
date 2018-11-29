import { Router, Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/User';

const router: Router = Router();

router.get(
  '/users',
  asyncHandler(async (req: Request, res: Response, next: Function) => {
    // Get Users
    const users = await userController.get(req, res, next);

    // Response
    res.send(users);
  })
);

export default router;
