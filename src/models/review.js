const mongoose = require('mongoose');


// Define review schema
const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  rating: Number,
  // Other relevant details
});

// Define models
const Review = mongoose.model('Review', reviewSchema);

