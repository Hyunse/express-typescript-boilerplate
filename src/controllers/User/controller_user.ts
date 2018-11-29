import asyncHandler from '../../middlewares/asyncHandler';
import Models from '../../models';

class UserController {
  constructor() {
    this.findAllUsers = this.findAllUsers.bind(this);
  }

  public findAllUsers = asyncHandler(async (_: Request, __: Response) => {
    const users = await Models.user.findAll();
    return users;
  });
}

export default new UserController();
