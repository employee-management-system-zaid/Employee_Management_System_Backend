const timesheetModel = require("../models/timesheetModel.js");

const addTimesheetController = async (req, res) => {
  const { day, startTime, endTime, selectedEmployee } = req.body;

  try {
    const existingTimesheet = await timesheetModel.findOne({
      day,
      startTime,
      endTime,
      selectedEmployee
    });

    if (existingTimesheet) {
      return res.json({message:"Same Employee Already added for same time"});
    }

    const newTimesheet = new timesheetModel({
      day,
      startTime,
      endTime,
      selectedEmployee
    });

    await newTimesheet.save();
    return res.json({ message: "Timesheet addedd successful", newTimesheet });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the timesheet entry" });
  }
};

module.exports = addTimesheetController;
