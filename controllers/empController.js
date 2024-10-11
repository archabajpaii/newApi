const asyncHandler = require("express-async-handler");
const Employee = require("../models/empModel");

const addEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !gender ||
    !education ||
    !company ||
    !experience ||
    !package
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const emp = await Employee.create({
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  });

  res.status(200).json(emp);
});
const getEmployeeList = asyncHandler(async (req, res) => {
  const emp = await Employee.find();
  res.status(200).json(emp);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const emp = await Employee.findByIdAndDelete(req.params.id);
  console.log(emp);

  if (!emp) {
    res.status(404);
    throw new Error("employee not found");
  }
  res.status(200).json(emp);
});

const updateEmployee = asyncHandler(async (req, res) => {
  console.log(req.params.id);

  const emp = await Employee.findById(req.params.id);
  if (!emp) {
    res.status(404);
    throw new Error("employee not found");
  }
  const updatedemp = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedemp);
});
module.exports = {
  addEmployee,
  getEmployeeList,
  updateEmployee,
  deleteEmployee,
};
