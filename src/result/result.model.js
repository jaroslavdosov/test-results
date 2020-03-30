const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  reportid: Number,
  project: String,
  component: String,
  title: String,
  link: String,
  result: String
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
