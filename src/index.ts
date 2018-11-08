// .env file
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
