// controllers/index.js
const express = require('express');

const router = express.Router();

router.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use(require('./users'));
router.use('/reports', require('./reports'));

module.exports = router;
