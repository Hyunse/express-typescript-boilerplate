import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Users, { IUser } from '../models/users';

class UserController {
  constructor() {
    this.findAllUsers = this.findAllUsers.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  public addUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, name, password, country }: IUser = req.body;
    
    const existUser = await Users.findOne({ email });

    // Duplicated User
    if(existUser) throw {
      status: 409,
      message: 'User already exists'
    }

    const newUser = new Users({
      email,
      name,
      password,
      country,
    });
    
    await newUser.save();

    res.send(newUser);
  });

  public findAllUsers = asyncHandler(async (_, res: Response) => {
    const users = await Users.find({});
    res.send(users);
  });
}

export default new UserController();
