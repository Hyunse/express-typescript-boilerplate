import jwt from 'jsonwebtoken';
import Users, { IUser } from '../models/users';

class JwtUtil {
  /**
   * Create Json Web Token
   * 
   * @param {number} id
   * @return {Object} token
   */
  public createJWT = (id: number): string => {
    const token = jwt.sign(
      {
        id
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
  public decodeJWT = async (token: string): Promise<IUser | null> => {
    try {
      const decoded: any = jwt.verify(token, `${process.env.JWT_TOKEN}`);
      const { id } = decoded;
      const user: IUser | null = await Users
        .findOne({ where: { id: id } });

      return user;
    } catch (error) {
      return null;
    }
  };
}

export default new JwtUtil();
