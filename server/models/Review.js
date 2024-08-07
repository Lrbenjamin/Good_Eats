const { Schema, model } = require("mongoose");
const formatDate = require("../utils/formatDate");

const reviewSchema = new Schema(
  {
    rating: {
      type: Schema.Types.Decimal128,
      min: 1,
      max: 5,
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxLength: 500,
    },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal),
    },
  },
  { toJSON: { getters: true } }
);

const Review = model("Review", reviewSchema);
module.exports = Review;