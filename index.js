const express = require('express');
require("dotenv").config()

const app = express();
const PORT = process.env.PORT;
const MongoDbURL = process.env.MONGO_DB_URL
const mongoDbConnect = require('./setup/mongoose');
const Register = require('./api/Register');
const Login = require('./api/Login');
const cors = require('cors');

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


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


