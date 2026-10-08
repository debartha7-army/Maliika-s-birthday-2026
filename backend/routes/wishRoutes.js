const express = require('express');
const router = express.Router();
const WishController = require('../controllers/wishController');

router.post('/wishes', WishController.submitWish);
router.get('/wishes', WishController.getWishes);

module.exports = router;
