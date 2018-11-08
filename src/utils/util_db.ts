import DBConfig from '../config/config_db';
import pg from 'pg-promise';

class DBUtils {
  private static pgp;

  static async connect() {
    try {
      // Start Transaction
      this.pgp = pg();

      // Connect DB & Get Data
      const db = this.pgp(DBConfig.dev);
      const data = await db.any('select * from testsa');

      // Return
      return data;
    } catch (error) {
      return error;
    } finally {
      // End Connection
      this.pgp.end();
    }
  }
}

export default DBUtils;
