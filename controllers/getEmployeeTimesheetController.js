const timesheetModel = require("../models/timesheetModel.js");
const userModel=require("../models/userModel.js")

const getEmplpoyeeTimesheetController = async (req, res) => {
  try {
    console.log(req.session.userId);
    if (req.session.userId) {
        const user = await userModel.findById(req.session.userId);
      if(user){
            const timesheet = await timesheetModel.find({employeeId: user.employeeId});
            console.log(timesheet);
            if(timesheet.length >0){
                return res.json({ message: "Found Timesheet", timesheet });
            }
            else{
                return res.json({ message: "No Timesheet found for the this employee"});
            }
        }   
        else{
            return res.json({ message: "No Timesheet found for the this employee"});
        }
    }
   
  } catch (error) {
    console.error("Error getting timesheets:", error);
    return res.status(500).json({ message: "Error getting timesheets" });
  }
};

module.exports = getEmplpoyeeTimesheetController;
