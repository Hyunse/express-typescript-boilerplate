import { Request, Response } from 'express';
import { asyncHandler } from '@middlewares/async.middleware';
import { container } from 'tsyringe';
import { UserService } from '@services/user.service'
import { User } from '@interface/user.interface'

class UserController {
  private userService = container.resolve(UserService);

  constructor() { }

  public findAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users: User[] = await this.userService.findAllUsers();
    
    res.status(200).send(users);
  });
}

export default new UserController();
