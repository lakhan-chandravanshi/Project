const { User } = require('../models');
const bcrypt = require('bcrypt');
exports.addUser = async (req, res) => {
  const { name, email, gender, role } = req.body;
  const createdBy = req.user.role;
  const image = req.file?.path;
  const password = await bcrypt.hash('default123', 10);
  const user = await User.create({ name, email, gender, role, createdBy, image, password });
  res.json(user);
};
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};