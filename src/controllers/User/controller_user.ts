import asyncHandler from '../../middlewares/asyncHandler';
import db from '../../utils/util_db';

class UserController {
  constructor() {
    this.get = this.get.bind(this);
  }

  public get = asyncHandler(async (req: Request, res: Response) => {
    const users = await db.connect();

    return users;
  });
}

export default new UserController();
