const express = require('express');
const fileController = require('../controllers/FileHandler');
const validateImage = require('../middlewares/ImageValidator');
const apiKeyAuth = require('../middlewares/ApiKeyValidator');

const router = express.Router();

router.post('/upload', apiKeyAuth, validateImage, fileController.uploadFile);
// Route to get all images
router.get('/images', fileController.getAllImages);

// Route to get a single image by ID
router.get('/images/:id', fileController.getImageById);

module.exports = router;
