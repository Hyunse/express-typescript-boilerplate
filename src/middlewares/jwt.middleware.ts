import { NextFunction, Request } from 'express';
import { decodeJWT } from '../utils/jwt.util';

/**
 * Json Web Token Handler
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const jwtHandler = async (
  req: Request,
  _,
  next: NextFunction
): Promise<void> => {
  const token = req.get('X-JWT');

  if (token) {
    const user = await decodeJWT(token);

    if (user) {
      req.body.user = user;
    } else {
      req.body.user = undefined;
    }
  }

  next();
};

export { jwtHandler };
