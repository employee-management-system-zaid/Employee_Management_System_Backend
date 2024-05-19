const employeeModel = require("../models/employeeModel.js");
const counterModel = require("../models/counterModel.js");

async function getNextEmployeeId() {
  const counter = await counterModel.findOneAndUpdate(
    { id: "employeeId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq.toString().padStart(4, '0');
}

const addEmployeeController = async (req, res) => {
  console.log("Backend on submit");
  try {
    const employeeId = await getNextEmployeeId();

    const employee = {
      employeeId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      age: req.body.age,
      dateOfJoining: req.body.dateOfJoining,
      title: req.body.title,
      department: req.body.department,
      employeeType: req.body.employeeType,
    };

    const check = await employeeModel.findOne({ email: employee.email });

    if (check) {
      res.json("Employee Exists");
    } else {
      await employeeModel.create(employee);
      res.json("Employee Added successfully");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = addEmployeeController;
