const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const MongoDbURL = process.env.MONGO_DB_URL
const mongoDbConnect = require('./setup/mongoose');
const Register = require('./api/Register');
const Login = require('./api/Login');
const cors = require('cors');


async function Setup() {
  app.use(express.json())
  app.use(cors())
  await mongoDbConnect.Start(MongoDbURL)
  app.use(Register.router);
  app.use(Login.router);

  app.listen(PORT, (req, res) => {
    console.log(`Server was started on ${PORT}`);
  })

}



Setup()


