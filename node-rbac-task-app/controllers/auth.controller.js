const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res) => {
  try {
    const { name, email, password, gender, role, createdBy } = req.body;

    const hashed = await bcrypt.hash(password, 4);

    const user = await User.create({
      name,
      email,
      password: hashed,
      gender,
      role,
      createdBy,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // optional: set token expiry
    );

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
