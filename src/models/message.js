const mongoose = require('mongoose');

// Define message schema
const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    // Other relevant details
  });

const Message = mongoose.model('Message', messageSchema);