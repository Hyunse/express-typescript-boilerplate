import { injectable } from 'tsyringe'
import UserModel from '@models/user.model';
import { User } from '@interface/user.interface'
import { HttpException } from '@/exceptions/httpException';
import { encryptPassword } from '@utils/password.util'

@injectable()
export class AuthService {
    constructor() {}

    async signin({ email, password}) {
        const user: User = await UserModel.findOne({ email, password }).select('-password');
        
        if (!user) {
            throw new HttpException(403, 'Wrong email or password');
        }

        return user;
    }

    async signup({ email, name, password, country }) {
        const user: User = await UserModel.findOne({ email });

        if(user) {
            throw new HttpException(409, 'User already exists');
        }

        const hashedPassword = await encryptPassword(password);
        const createdUser = await UserModel.create({ email, name, password: hashedPassword, country});
        const userWithoutPassword = await UserModel.findById(createdUser._id).select('-password');
        
        return userWithoutPassword;
    }
}