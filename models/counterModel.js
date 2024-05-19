// Created a counter to keep track of no. of employee so as to generate employeeId
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 0
  }
});

const counterModel = mongoose.model('Counter', counterSchema);
module.exports = counterModel;
