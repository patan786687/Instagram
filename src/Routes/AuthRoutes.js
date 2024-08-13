const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./user'); // Adjust the path as needed
const router = express.Router();

router.post('/NewLogin', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && bcrypt.compareSync(password, user.password)) {
    // Successful login
    res.status(200).json({ message: 'Login successful', user });
  } else {
    // Invalid credentials
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
