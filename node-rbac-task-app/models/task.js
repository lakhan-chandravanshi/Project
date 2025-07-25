const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    types: DataTypes.ARRAY(DataTypes.STRING),
    createdBy: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });
};
