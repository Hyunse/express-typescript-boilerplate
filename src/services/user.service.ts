import { injectable } from 'tsyringe'
import UserModel from '@models/user.model';
import { User } from '@interface/user.interface'

@injectable()
export class UserService {
    constructor() { }

    async findAllUsers(): Promise<User[]> {
        const users: User[] = await UserModel.find({}).select('-password');
        return users;
    }
}