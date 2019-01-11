// controllers/reports.js
const express = require('express');
const asyncHandler = require('express-async-handler');
const Report = require('../models/report');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const { year, event, team } = req.params;
  const reports = await Report.find({ year, event, team });

  res.status(200).json(reports);
}));

router.post('/', asyncHandler(async (req, res) => {
  const report = await Report.create(req.body);

  res.status(200).json(report);
}));

module.exports = router;
