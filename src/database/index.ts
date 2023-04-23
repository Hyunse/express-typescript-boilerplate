import * as mongoose from 'mongoose';
import { DB_HOST, DB_PORT } from '@config';
import { logger } from '@/utils/logger.util'

const initializeDatabase = () => {
  const url = `mongodb://${DB_HOST}:${DB_PORT}`;

  mongoose.connect(url).then(() => {
    logger.info('MongoDB database connected successfully');
  }).catch((error: mongoose.MongooseError) => {
    logger.error('MongoDB connection error', error);
    throw error;
  });
};

export { initializeDatabase };
