import app from '@/app';
import { logger } from '@/utils/logger.util';
import { NODE_ENV, PORT } from '@config'

const server = app.listen(PORT, () => {
  logger.info(`=================================`);
  logger.info(`======= ENV: ${NODE_ENV} =======`);
  logger.info(`👋 App listening on the port ${PORT}`);
  logger.info(`=================================`);
});

server.on('error', (error) => {
  console.error('Server Error', error);
});
