const { Task } = require('../models');

exports.addTask = async (req, res) => {
  try {
    const { name, description, types, startDate, endDate } = req.body;

    const createdBy = req.user.role;
    const task = await Task.create({
      name,
      description,
      types,
      startDate,
      endDate,
      createdBy,
      UserId: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { UserId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};
