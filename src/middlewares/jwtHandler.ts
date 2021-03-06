import { Request, Response, NextFunction } from 'express';
import JWTUtil from '../utils/util_jwt';

/**
 * Json Web Token Handler
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const jwtHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.get('X-JWT');

  if (token) {
    const user = await JWTUtil.decodeJWT(token);

    if (user) {
      req.body.user = user;
    } else {
      req.body.user = undefined;
    }
  }

  next();
};

export default jwtHandler;