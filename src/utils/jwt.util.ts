import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import UserModel from '@models/user.model';
import { User } from '@interface/user.interface'
/**
 * Create Json Web Token
 *
 * @param {ObjectId} id
 * @return {Object} token
 */
const createJWT = (id: ObjectId): string => {
  const token = jwt.sign(
    {
      id,
    },
    `${process.env.JWT_TOKEN}`
  );

  return token;
};

/**
 * Decode JWT
 *
 * @param {string} token
 * @return {User} user
 */
const decodeJWT = async (token: string): Promise<User> => {
  try {
    const decoded: any = jwt.verify(token, `${process.env.JWT_TOKEN}`);
    const { id } = decoded;
    const user: User = await UserModel.findOne({ where: { id: id } });

    return user;
  } catch (error) {
    return null;
  }
};

export { createJWT, decodeJWT };
