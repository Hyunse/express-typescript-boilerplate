import DBConfig from '../config/config_db';
import * as mongoose from 'mongoose';

const env = DBConfig.env || 'development';

class Database {
  public static init(): any {
    const url = env === 'development' ? 'mongodb://localhost:27017' : '';

    mongoose.connect(url, (err: mongoose.MongooseError) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log('Mongo Connected!!');
      }
    });
  }
}

export default Database;
