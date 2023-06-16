const { Users } = require('../models/Users.Schema');
const Router = require('express')
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const user = await Users.findOne({ userName: userName });

  if (!user) {
    res.status(404).send('The user with such credentials wasn`t found')
  }
  else {
    try {
      const matchedPassword = bcrypt.compare(password, user.password);
      if (!matchedPassword) {
        res.status(404).send('Please check userName or password')
      }

      const token = jwt.sign({ userId: user._id }, secretKey)
      res.status(200).json({ token })
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

  }
})


module.exports = { router }