export default {
  dev: {
    host: 'localhost', // 'localhost' is the default;
    port: process.env.DB_PORT,
    database: 'cappic',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
};
