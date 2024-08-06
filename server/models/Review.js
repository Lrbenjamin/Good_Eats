const { Schema, model, Types } = require("mongoose");
// import helper function to format date
const formatDate = require("../utils/formatDate");

const reviewSchema = new Schema(
  {
    reviewId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    rating: {
      // allows decimals for calculating total rating
      type: Schema.Types.Decimal128,
      min: 1,
      max: 5,
      required: true,
    },
    // store: StoreSchema,
    text: {
      type: String,
      required: true,
      maxLength: 500,
    },
    // username or email ?
    username: { type: String, required: true },
    // format timestamp at query
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal),
    },
    // OPT comments section
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (createdAtVal) => formatDate(createdAtVal),
        },
      },
    ],
  },
  { toJSON: { getters: true } }
);

// initialize model & export
const Review = model("Review", reviewSchema);
module.exports = Review;
