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
  selectedEmployee: {
    type: String,
  }
});

const timesheetModel = mongoose.model("Timesheet", timesheetSchema);
module.exports = timesheetModel;
