const timesheetModel = require("../models/timesheetModel.js");
const employeeModel = require("../models/employeeModel.js");

const getTimesheetController = async (req, res) => {
  try {
    let timesheets = await timesheetModel.find();

    let employees = await employeeModel.find();

    let allTimesheets = [];
    console.log("Timesheets");
    console.log(timesheets);

    if(timesheets.length >0){
      for (let timesheet of timesheets) {

        let employee = employees.find((element) => element.employeeId == timesheet.employeeId);
     
      if (employee) {
        let formattedTimesheet = {
          date: timesheet.day,
          startTime: timesheet.startTime,
          endTime: timesheet.endTime,
          employeeName: `${employee.firstName} ${employee.lastName}`,
          employeeId:employee._id
        };
        allTimesheets.push(formattedTimesheet);
      }
    }
    return res.json({ message: "All Timesheets", allTimesheets });
    }
    else{
      return res.json({ message: "No Timesheet" });
    }
  } catch (error) {
    console.error("Error getting timesheets:", error);
    return res.status(500).json({ message: "Error getting timesheets" });
  }
};

module.exports = getTimesheetController;
