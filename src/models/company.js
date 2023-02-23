const mongoose = require('mongoose');


// Define company schema
const companySchema = new mongoose.Schema({
  name: String,
  address: String,
  contactInfo: String,
  // Other relevant details
});


// Define models

const Company = mongoose.model('Company', companySchema);

