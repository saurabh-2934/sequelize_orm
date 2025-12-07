const express = require('express');
const postController = require('../controllers/post.controller');
const {authenticateToken} = require('../middleware/check_auth')

const router = express.Router();

// router.get('/', postController.index)
router.post('/', authenticateToken, postController.save)
router.get('/:id', postController.show)
router.get('/', postController.index)
router.put('/update/:id', authenticateToken, postController.update)
router.delete('/remove/:id', authenticateToken, postController.removePost)

module.exports = router