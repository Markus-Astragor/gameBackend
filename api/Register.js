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
  else {
    if(password.length < 8){
      return res.status(404).send('Password should be more than 8 symbols')
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const docs = new Users({ userName: userName, password: hashedPassword });
    await docs.save();
    //generate jwt token
    const token = jwt.sign({ userId: docs._id }, secretKey)
    res.status(200).json({ token })
  }


})



module.exports = { router };