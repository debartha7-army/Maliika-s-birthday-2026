const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.post('/unlock', AuthController.unlock);
router.post('/hash', AuthController.hashSecret);

module.exports = router;
