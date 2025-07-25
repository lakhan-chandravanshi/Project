const { Sequelize } = require('sequelize');
const UserModel = require('./User');  // ✅ fix here
const TaskModel = require('./task');

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: process.env.DB_DIALECT,
   logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
       
    }
  }
});


const User = UserModel(sequelize);
const Task = TaskModel(sequelize);
sequelize.sync({ alter: true })
User.hasMany(Task);
Task.belongsTo(User);

module.exports = { sequelize, User, Task };
