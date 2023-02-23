const mongoose = require('mongoose');


// Define notification schema
const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  // Other relevant details
});

// Define models
const Notification = mongoose.model('Notification', notificationSchema);
