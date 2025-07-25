module.exports = (allowedRoles, actions = []) => (req, res, next) => {
  const { role } = req.user;
  if (!allowedRoles.includes(role)) return res.status(403).json({ message: 'Access denied' });
  next();
};