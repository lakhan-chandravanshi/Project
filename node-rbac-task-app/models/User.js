// models/user.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female', 'Others'),
    role: DataTypes.ENUM('Super-admin', 'Admin', 'Manager'),
    createdBy: DataTypes.STRING,
  });
};
