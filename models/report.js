// models/report.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ajv = new Ajv();

const { Schema } = mongoose;

const ReportSchema = new Schema({
  info: {
    team: { type: Number, required: true },
    year: { type: Number, required: true },
    event: { type: String, required: true },
    round: { type: Number, required: true },
  },
  data: {
    type: Object,
    required() {
      return fs.existsSync(path.join(__dirname, `../schemas/${this.info.year}.json`));
    },
    validate: {
      validator(v) {
        const schema = JSON.parse(fs.readFileSync(path.join(__dirname, `../schemas/${this.info.year}.json`), 'utf8'));
        return ajv.validate(schema, v);
      },
      message: () => ajv.errorsText(),
    },
  },
});

module.exports = mongoose.model('Report', ReportSchema);
