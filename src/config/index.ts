import { config } from 'dotenv';
config({ path: `../.env.${process.env.NODE_ENV || 'development'}` });

export const { NODE_ENV, PORT } = process.env;

export * from './db.config';
export * from './log.config';
