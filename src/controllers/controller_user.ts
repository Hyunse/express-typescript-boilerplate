import asyncHandler from '../middlewares/asyncHandler';
import Users from '../models/users'

class UserController {
  constructor() {
    this.findAllUsers = this.findAllUsers.bind(this);
  }

  public findAllUsers = asyncHandler(async (_, res) => {
    const users = Users.find({});
    res.send(users);
  });
}

export default new UserController();
