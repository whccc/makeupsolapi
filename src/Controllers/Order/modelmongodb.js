const { Schema, model } = require("mongoose");

const Order = new Schema({
  strNameUser: {
    type: String,
    required: true,
  },
  strEmailUser: {
    type: String,
    required: true,
    trim: true,
  },
  strPhoneUser: {
    type: String,
    required: true,
    trim: true,
  },
  ArrayProducts: {
    type: Array,
  },
});

module.exports = model("Order", Order);
