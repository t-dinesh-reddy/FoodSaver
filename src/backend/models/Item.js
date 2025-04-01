const mongoose = require("mongoose");

// structure of the database can be altered from here 
const Item = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  calories: {
    type: Number,
  },
  fats: {
    type: Number,
  },
  carbs: {
    type: Number,
  },
  protiens: {
    type: Number,
  },
  requested: {
    type: Boolean,
  },
  r_accepted: {
    type: Boolean,
  },
  itemImageURL: {
  }
});

module.exports = mongoose.model("Item", Item);
