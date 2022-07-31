const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    avatar: String,
    role: String,
    first_name: String,
    last_name: String,
    country: String,
    phone: String,
    linkedin_url: String,
    email: String,
    password: String,
    experience_year: Number,
    license_url: String,
    user_verified: Boolean,
    user_balance: Number,
    
    


    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
