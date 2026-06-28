const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');

// GET all messages
router.get('/', getMessages);

// POST send message
router.post('/', sendMessage);

module.exports = router;