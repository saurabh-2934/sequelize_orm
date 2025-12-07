const express = require('express')
const imageController = require('../controllers/image.controller')
const imageUploader = require('../helpers/image_uploader')
const {authenticateToken} = require('../middleware/check_auth')

const router = express.Router();

router.post('/upload', authenticateToken, imageUploader.upload.single('image'), imageController.upload)

module.exports = router