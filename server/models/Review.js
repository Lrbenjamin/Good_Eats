const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate'); 
const { Schema, model } = mongoose;

// Define the review schema
const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    text: {
        type: String,
        required: true,
        maxLength: 500,
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true,
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store', // Reference to User model
        required: true,
    },
}, { toJSON: { getters: true } });

// Create the Review model
const Review = model('Review', reviewSchema);

// Export the Review model
module.exports = Review;
