// models/report.js
const mongoose = require('mongoose');

const { Schema } = mongoose;

// TODO: Separate year-specific data fields
// - discriminators or JSON validated with JSON Schema
const HatchSchema = new Schema({
  hasPanel: { type: Boolean, default: false },
  hasCargo: { type: Boolean, default: false },
}, { _id: false });

const ReportSchema = new Schema({
  info: {
    team: { type: Number, required: true },
    year: { type: Number, required: true },
    event: { type: String, required: true },
    round: { type: Number, required: true },
  },
  data: {
    rocketHatches: [HatchSchema],
    cargoShipHatches: [HatchSchema],
  },
});

module.exports = mongoose.model('Report', ReportSchema);
