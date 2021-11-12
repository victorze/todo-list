const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/todo', taskController.store);

module.exports = router;
