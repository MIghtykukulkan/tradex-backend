const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  // Other relevant details
});

// Define models
const Product = mongoose.model('Product', productSchema);

