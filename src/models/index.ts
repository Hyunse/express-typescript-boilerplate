import { Sequelize } from 'sequelize';
import DBConfig from '../config/config_db';

const env = DBConfig.env || 'development';

// Init Sequelize
const sequelize : Sequelize = new Sequelize(
  DBConfig[env].database || '',
  DBConfig[env].user || '',
  DBConfig[env].password || '',
  {
    dialect: 'postgres',
    timezone: 'utc'
  }
);
// Add Models
const models : any = {
  user: sequelize.import('./Users'),
  sequelize,
  Sequelize,
};

// Association
Object.keys(models).forEach((modelName) => {
  if (modelName) {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
