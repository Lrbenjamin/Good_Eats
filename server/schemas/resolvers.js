const { User, Review, Store } = require('../models'); // Use CommonJS require
const { generateToken } = require('../utils/Auth'); 

const resolvers = {
  Query: {
    getAllStores: async () => {
      const allStores = await Store.find();
      return allStores;
    },
    getStore: async (parent, { storeId }) => {
      try {
        const store = await Store.findById(storeId);
      return store;
      } catch (err) {
        console.log(err);
        return null
      }
    },
    getReviewsForStore: async (parent, { storeId }) => {
      const reviews = await Review.find({ store: storeId });
      return reviews;
    },
    getReviewsByUser: async (parent, { username }) => {
      const reviews = await Review.find({ username });
      return reviews;
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      if (!username || !password) {
        throw new Error('Username and password are required');
      }
    
      try {
        const newUser = await User.create({ username, password });
        const token = generateToken(newUser);
        return { token, user: newUser };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
      }
    },
    addReview: async (parent, { rating, text }, context) => {
      try {
        // Logic to create a new review with the provided rating, text, username, and createdAt
        const newReview = await Review.create({ 
          rating, 
          text, 
          username:  context.user.username});
        return newReview;
      } catch (error) {
        throw new Error('Failed to add review');
      }
    },
  },
  // login: async (_, { username, password }) => {
  //   try {
  //     // Logic to find the user by username and password
  //     const user = await User.findOne({ username, password });
  //     if (!user) {
  //       throw new Error('Invalid credentials');
  //     }
  //     // Generate a token for the user
  //     const token = generateToken(user);
  //     return { token, user: { _id: user._id } };
  //   } catch (error) {
  //     throw new Error('Failed to log in');
  //   }
  // },

  // editReview: async (parent, { reviewId, rating, text }, context) => {
  //   try {
  //     // Find the review by ID
  //     const review = await Review.findById(reviewId);
  //     if (!review) {
  //       throw new Error('Review not found');
  //     }
  //     // Update the review with new rating and text
  //     review.rating = rating;
  //     review.text = text;
  //     await review.save();
  //     return review;
  //   } catch (error) {
  //     throw new Error('Failed to edit review');
  //   }
  // },
  // deleteReview: async (parent, { reviewId }, context) => {
  //   try {
  //     // Find the review by ID
  //     const review = await Review.findById(reviewId);
  //     if (!review) {
  //       throw new Error('Review not found');
  //     }
  //     // Delete the review
  //     await review.remove();
  //     return review;
  //   } catch (error) {
  //     throw new Error('Failed to delete review');
  //   }
  // },
  //   logout: async (parent, args, context) => {
  //     try {
  //       // Perform logout actions, such as clearing the user's session or token
  //       // You can add your logout logic here
  //       return { message: 'User logged out successfully' };
  //     } catch (error) {
  //       throw new Error('Failed to log out');
  //     }
  //   }
};

module.exports = resolvers; // Use CommonJS export
