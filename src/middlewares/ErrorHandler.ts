import { NextFunction, Request, Response } from 'express';

export interface IError {
  status?: number;
  message?: string;
  stack?: string;
}

/**
 * Error Handler
 *
 * @param {IError} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function errorHandler(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.status || 500);
  res.send({
    ok: false,
    error: err.message || 'Server Error!',
  });
}
