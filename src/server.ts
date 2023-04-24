import app from '@/app';
import { logger } from '@/utils/logger.util';
import { NODE_ENV, PORT } from '@config'

const server = app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT} in ${NODE_ENV} mode`);
});

server.on('error', (error) => {
  logger.error('Server Error', error);
});
