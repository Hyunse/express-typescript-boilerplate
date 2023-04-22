import { cleanEnv, port, str } from 'envalid';

export const envValidator = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
};