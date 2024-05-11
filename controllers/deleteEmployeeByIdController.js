const employeeModel = require("../models/employeeModel.js");
const deleteEmployeeByIdController = async (req, res) => {
  try {
    const loggedInUserId = req.session.userId; // Assuming you have the user ID in the request object

    // Retrieve the note ID from the request body
    const employeeId = req.body.employeeId;

    const result = await employeeModel.findByIdAndDelete(employeeId);

    // Check if the note was found and deleted

    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.json({ message: "Employee Deleted" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res.status(500).json({ message: "Error deleting employee" });
  }
};

module.exports = deleteEmployeeByIdController;
