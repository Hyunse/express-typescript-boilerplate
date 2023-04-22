import { NODE_ENV, LOG_FORMAT } from '@config';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import homeRoute from '@routes/home.route';
import userRoute from '@routes/user.route';
// import { logHandler } from '@middlewares/log.middleware';
import { errorHandler } from '@middlewares/error.middleware';
import { jwtHandler } from '@middlewares/jwt.middleware';
import { initializeDatabase } from '@database';
import { stream } from '@/utils/logger.util';

class App {
  public app: express.Application;
  public env: string;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.middlewares();
    this.mountRoutes();
    this.logging();
    this.connectDB();
  }

  // Middlewares
  private middlewares = (): void => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(jwtHandler);
  };

  private logging = (): void => {
    this.app.use(morgan(LOG_FORMAT || 'dev', { stream }));
    // this.app.use(logHandler);
    this.app.use(errorHandler);
  };

  // Mount Routes
  private mountRoutes(): void {
    this.app.use(homeRoute);
    this.app.use(userRoute);
  }

  private connectDB(): void {
    initializeDatabase();
  }
}

export default new App().app;
