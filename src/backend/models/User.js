const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  verified: {
    type: Boolean,
  }
});

module.exports = mongoose.model("User", User);