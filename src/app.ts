import 'reflect-metadata';
import { LOG_FORMAT } from '@config';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression'
import homeRoute from '@routes/home.route';
import userRoute from '@routes/user.route';
import authRoute from '@routes/auth.route'
import { jwtHandler } from '@middlewares/jwt.middleware';
import { initializeDatabase } from '@database';
import { logger, stream } from '@/utils/logger.util';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.database();
    this.errorHandler();
  }

  // Middlewares
  private middlewares = (): void => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(jwtHandler);
    this.app.use(morgan(LOG_FORMAT || 'dev', { stream }));
  };

  private routes(): void {
    this.app.use('/', homeRoute);
    this.app.use('/users', userRoute);
    this.app.use('/auth', authRoute);
  }

  private database(): void {
    try {
      initializeDatabase();
    } catch (error) {
      logger.error(error.message);
      process.exit(1);
    }
  }

  private errorHandler(): void {
    this.app.use((err: any, _: Request, res: Response, next: NextFunction) => {
      logger.error(err.message);
      res.status(err.status || 500).json({
        error: err.message || 'Server Error',
      });
    });
  }
}

export default new App().app;
