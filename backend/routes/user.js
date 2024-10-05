// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Use userController.registerUser to access the registerUser function
router.post('/register', userController.registerUser); 
router.post('/login', userController.login);

module.exports = router;
