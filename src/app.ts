import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import homeRoute from './routes/route_home';

class App {
  public app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.mountRoutes();
  }

  // Middlewares
  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(helmet());
  };

  // Mount Routes
  private mountRoutes(): void {
    this.app.use(homeRoute);
  }
}

export default new App().app;
