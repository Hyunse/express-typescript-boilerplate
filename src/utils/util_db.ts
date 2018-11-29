import DBConfig from '../config/config_db';
import pg from 'pg-promise';

class DBUtils {
  private pgp;
  private dbConfig = DBConfig.dev;

  constructor() {
    this.connect = this.connect.bind(this);
  }

  public startTransaction() {
    this.pgp = pg();
  }

  public endTransaction() {
    this.pgp.end();
  }

  public connectDB() {
    return this.pgp(this.dbConfig);
  }

  public async connect() {
    let data;
    try {
      // Start Transaction
      this.startTransaction();

      // Connect DB & Get Data
      if (this.pgp) {
        const db = this.connectDB();
        data = db.any('select * from Users');
      }

      // Return
      return data;
    } catch (error) {
      return error;
    } finally {
      // End Connection
      this.endTransaction();
    }
  }
}

export default new DBUtils();
