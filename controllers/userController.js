const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const getUserBYID = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json(user);
});
const upadteUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(user);
  console.log(updatedUser);

  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  // if(!user){
  //     res.status(404);
  //     throw new Error("user not found")
  // }
  console.log(user);

  res.status(200);
});
const addUser = asyncHandler(async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.create({
    name,
    age,
  });

  res.status(200).json(user);
});
module.exports = { getUsers, getUserBYID, upadteUserById, deleteUser, addUser };
