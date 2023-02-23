const mongoose = require('mongoose');

// Define payment schema
const paymentSchema = new mongoose.Schema({
  payer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  payee: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  amount: Number,
  method: String,
  // Other relevant details
});

// Define models
const Payment = mongoose.model('Payment', paymentSchema);
