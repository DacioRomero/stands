// models/report.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ajv = new Ajv();

const { Schema } = mongoose;

const intValidator = {
  validator: Number.isInteger,
  message: '{VALUE} is not an integer.',
};

// TODO: Automatically update report Schemas when pushed to repo
const ReportSchema = new Schema({
  info: {
    team: {
      type: Number,
      required: true,
      validate: [
        intValidator,
        {
          validator: v => v > 0,
          message: '{VALUE} is less than 1.',
        },
      ],
    },
    year: {
      type: Number,
      required: true,
      validate: [
        intValidator,
        {
          validator: v => v >= 1992,
          message: '{VALUE} is before inaugural season.',
        },
        {
          validator: v => v <= new Date().getFullYear(),
          message: '{VALUE} is greater than current year.',
        },
      ],
    },
    event: { type: String, required: true },
    round: {
      type: Number,
      required: true,
      validate: intValidator,
    },
  },
  data: {
    type: Object,
    required: true,
    validate: [
      {
        validator() { return fs.existsSync(this.schemaPath); },
        message: 'No JSON Schema for year.',
      },
      {
        // Checks if data is valid against corresponding JSON Schema
        validator(v) {
          const schema = JSON.parse(fs.readFileSync(this.schemaPath), 'utf-8');
          return ajv.validate(schema, v);
        },
        message: ajv.errorsText(),
      },
    ],
  },
});

ReportSchema.virtual('schemaPath').get(function get() {
  return path.join(__dirname, `../schemas/${this.info.year}.json`);
});

module.exports = mongoose.model('Report', ReportSchema);
