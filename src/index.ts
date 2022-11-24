// .env file
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is listening on ${port}`);
});
