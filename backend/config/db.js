const mongoose = require('mongoose');

// Connect to the database
const db = async() => {
  await mongoose.connect('mongodb://localhost:27017/paytm');
    
    }

module.exports = db;




