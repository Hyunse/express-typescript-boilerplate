import asyncHandler from '../../middlewares/asyncHandler';
import db from '../../utils/util_db';

export const get = asyncHandler(async () => {
  await db.connect();
});

class UserController {
  constructor() {

  }
  public get(): void {}
}

export default new UserController();
