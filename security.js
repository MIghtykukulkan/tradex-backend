
// require external libraries and dependencies
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Unauthorized request');
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

// define routes that require authentication
app.get('/protected-route', verifyToken, (req, res) => {
  res.send(`Welcome ${req.user.username} to protected route`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
