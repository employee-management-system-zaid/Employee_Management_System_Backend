const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  age: {
    type: Number,
  },
  dateOfJoining: {
    type: String,
  },
  title: {
    type: String,
  },
  department: {
    type: String,
  },
  employeeType: {
    type: String,
  },
});

const employeeModel = mongoose.model("Employees", employeeSchema);
module.exports = employeeModel;
