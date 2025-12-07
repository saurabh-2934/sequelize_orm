const express = require('express');
const postController = require('../controllers/user.controller');

const router = express.Router();

router.post('/sign-up', postController.signUp)
router.post('/sign-in', postController.signIn)

module.exports = router