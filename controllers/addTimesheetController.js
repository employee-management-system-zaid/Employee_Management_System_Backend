const timesheetModel = require("../models/timesheetModel.js");

const addTimesheetController = async (req, res) => {
  const { day, startTime, endTime, employeeId } = req.body;

  try {
    const existingTimesheet = await timesheetModel.findOne({
      day,
      startTime,
      endTime,
      employeeId
    });

    if (existingTimesheet) {
      return res.json({message:"Same Employee Already added for same time"});
    }

    else{
      const newTimesheet = new timesheetModel({
        day,
        startTime,
        endTime,
        employeeId
      });
  
      await newTimesheet.save();
      return res.json({ message: "Timesheet added successful", newTimesheet });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the timesheet entry" });
  }
};

module.exports = addTimesheetController;
