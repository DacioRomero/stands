// controllers/index.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use(require('./users'));
router.use('/reports', require('./reports'));

module.exports = router;
