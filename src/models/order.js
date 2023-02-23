const mongoose = require('mongoose');


// Define order schema
const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  status: String,
  paymentDetails: String,
  // Other relevant details
});
// Define models
const Order = mongoose.model('Order', orderSchema);
]
