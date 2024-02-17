const users = require("../models/users.model");

const getAllUsers = (req, res) => {
  res.status(202).json({
    users,
  });
};

const createUser = (req, res) => {
  res.status(202).json({
    message: "I am post method",
  });
};

module.exports = { getAllUsers, createUser };
