const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const rbac = require('../middlewares/rbac.middleware');
const { addTask, getTasks } = require('../controllers/task.controller');

router.post('/', auth, rbac(['Super-admin', 'Admin', 'Manager']), addTask);
router.get('/', auth, rbac(['Super-admin', 'Admin', 'Manager']), getTasks);
module.exports = router;