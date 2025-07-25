const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const auth = require('../middlewares/auth.middleware');
const rbac = require('../middlewares/rbac.middleware');
const { addUser, getUsers } = require('../controllers/user.controller');

router.post('/', auth, rbac(['Super-admin', 'Admin']), upload.single('image'), addUser);
router.get('/', auth, rbac(['Super-admin', 'Admin', 'Manager']), getUsers);
module.exports = router;