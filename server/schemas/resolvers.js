const { User, Review, Store } = require("../models");
// set up JWT for login authentication
const { signToken, AuthenticationError } = require("../utils/Auth");

const resolvers = {
  Query: {
    stores: async () => {
      // Logic to fetch all stores
      const allStores = await Store.find();
      return allStores;
    },
    store: async (parent, { storeId }) => {
      // Logic to fetch a single store by ID
      const store = await Store.findById(storeId);
      return store;
    },
    reviewsByStore: async (parent, { storeId }) => {
      // Logic to fetch reviews for a specific store
      const reviews = await Review.find({ store: storeId });
      return reviews;
    },
    reviewsByUser: async (parent, { username }) => {
      // Logic to fetch reviews by a specific user
      const reviews = await Review.find({ username });
      return reviews;
    },
  },
  Mutation: {

    addUser: async (parent, { username, password }) => {
      try {
        // Logic to create a new user with the provided username and password
        const newUser = await User.create({ username, password });

        // Generate a token for the new user
        const token = generateToken(newUser);

        return { token, user: newUser };
      } catch (error) {
        throw new Error('Failed to create user');
      }
    }
  },

  login: async (parent, { username, password }) => {
    try {
      // Logic to find the user by username and password
      const user = await User.findOne({ username, password });

      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Generate a token for the user
      const token = generateToken(user);

      return { token, user: { _id: user._id } };
    } catch (error) {
      throw new Error('Failed to log in');
    }
  },

  addReview: async (parent, { rating, text, username, createdAt }) => {
    try {
      // Logic to create a new review with the provided rating, text, username, and createdAt
      const newReview = await Review.create({ rating, text, username, createdAt });

      return newReview;
    } catch (error) {
      throw new Error('Failed to add review');
    }
  },

  editReview: async (parent, { reviewId, rating, text }, context) => {
    try {
      // Find the review by ID
      const review = await Review.findById(reviewId);

      if (!review) {
        throw new Error('Review not found');
      }

      // Update the review with new rating and text
      review.rating = rating;
      review.text = text;
      await review.save();

      return review;
    } catch (error) {
      throw new Error('Failed to edit review');
    }
  },

  deleteReview: async (parent, { reviewId }, context) => {
    try {
      // Find the review by ID
      const review = await Review.findById(reviewId);

      if (!review) {
        throw new Error('Review not found');
      }

      // Delete the review
      await review.remove();

      return review;
    } catch (error) {
      throw new Error('Failed to delete review');
    }
  },

  Mutation: {
    logout: async (parent, args, context) => {
      try {
        // Perform logout actions, such as clearing the user's session or token
        // You can add your logout logic here
        return { message: 'User logged out successfully' };
      } catch (error) {
        throw new Error('Failed to log out');
      }
    }
  }
};

module.exports = resolvers;
