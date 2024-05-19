const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timesheetSchema = new Schema({
  day: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  employeeId: {
    type: String,
  }
});

const timesheetModel = new mongoose.model("Timesheet", timesheetSchema);
module.exports = timesheetModel;
