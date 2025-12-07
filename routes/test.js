const express = require('express');
const testController = require('../controllers/test.controller');
const {authenticateToken} = require('../middleware/check_auth')

const router = express.Router();

// router.get('/', postController.index)

router.get('/associations', testController.test)
module.exports = router