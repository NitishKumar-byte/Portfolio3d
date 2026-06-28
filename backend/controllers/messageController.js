const Message = require('../models/Message');
const { sendEmailNotification } = require('./emailController');

// Send message
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill all fields'
      });
    }

    const newMessage = await Message.create({ name, email, message });

    let emailSent = false;
    try {
      await sendEmailNotification(name, email, message);
      emailSent = true;
    } catch (err) {
      console.error('Email error:', err.message);
    }

    res.status(201).json({
      success: true,
      data: newMessage,
      message: emailSent ? '✅ Message sent! Check your email.' : '⚠️ Message saved but email failed.',
      emailSent
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
};

// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { sendMessage, getMessages };