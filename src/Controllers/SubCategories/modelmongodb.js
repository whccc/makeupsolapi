const { Schema, model } = require("mongoose");
const SubCategories = new Schema(
  {
    strName: {
      type: String,
      trim: true,
    },
    strIdCategory: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      trim: true,
      required: true,
    },
    strNameCategory: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("SubCategories", SubCategories);
