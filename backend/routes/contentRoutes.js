const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');

router.get('/content', ContentController.getContent);

module.exports = router;
