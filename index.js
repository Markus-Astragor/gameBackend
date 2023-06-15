const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const MongoDbURL = process.env.MONGO_DB_URL
const mongoDbConnect = require('./setup/mongoose');


async function Setup() {
  await mongoDbConnect.Start(MongoDbURL)
  app.listen(PORT, (req, res) => {
    console.log(`Server was started on ${PORT}`);
  })

}



Setup()


