const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate'); // Adjust path if necessary

const { Schema, model } = mongoose;

// Define the review schema
const reviewSchema = new Schema({
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
}, { toJSON: { getters: true } });

// Create the Review model
const Review = model('Review', reviewSchema);

// Export the Review model
module.exports = Review; // Use CommonJS export
