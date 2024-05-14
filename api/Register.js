const { Users } = require('../models/Users.Schema');
require('dotenv').config();
const Router = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secretKey = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
  const { userName, password } = req.body;
  const check = await Users.findOne({ userName: userName });

  if (check) {
    return res.status(400).send('Account with this username exists');
  }

  if (userName.length < 2 || userName.length > 16) {
    return res.status(404).send('userName should have more than 2 symbols and less than 16')
  }

  if (password.length < 8 || password.length > 16) {
    return res.status(404).send('Password should be more than 8 symbols and less than 16')
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const doc = new Users({ userName: userName, password: hashedPassword });
  await doc.save();

  const token = jwt.sign({ userId: doc._id }, secretKey)
  res.status(200).json({ token })


})



module.exports = { router };