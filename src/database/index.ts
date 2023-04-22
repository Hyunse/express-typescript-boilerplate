import * as mongoose from 'mongoose';
import { DB_HOST, DB_PORT } from '@config';
import { logger } from '@/utils/logger.util'

const initializeDatabase = () => {
  const url = `mongodb://${DB_HOST}:${DB_PORT}`;

  mongoose.connect(url, (err: mongoose.MongooseError) => {
    if (err) {
      logger.error(err);
      throw err;
    } else {
      logger.info('MongoDB Connected!')
    }
  });
};

export { initializeDatabase };
