// controllers/index.js
const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(cors());
router.options('*', cors());

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use(require('./users'));
router.use('/reports', require('./reports'));

module.exports = router;
