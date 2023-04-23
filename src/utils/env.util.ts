import { cleanEnv, port, str } from 'envalid';

export const envValidator = () => {
  cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'staging', 'production']}),
    PORT: port(),
    LOG_FORMAT: str(),
    LOG_DIR: str({ desc: 'Directory where log files will be written'}),
    DB_HOST: str(),
    DB_PORT: port()
  });
};