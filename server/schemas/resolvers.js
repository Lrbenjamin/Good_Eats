const { User, Review, Store } = require('../models'); // Use CommonJS require
const { generateToken } = require('../utils/Auth'); 

const resolvers = {
  Query: {
    getAllStores: async () => {
      try {
        const allStores = await Store.find();
        return allStores;
      } catch (error) {
        console.error('Error fetching all stores:', error);
        throw new Error('Failed to fetch stores');
      }
    },
    getStore: async (parent, { storeId }) => {
      try {
        const store = await Store.findById(storeId).populate('reviews');
        if (!store) {
          throw new Error('Store not found');
        }
        return store;
      } catch (err) {
        console.error('Error fetching store:', err);
        throw new Error('Failed to fetch store');
      }
    },
    getReviewsForStore: async (parent, { storeId }) => {
      try {
        const reviews = await Review.find({ store: storeId });
        return reviews;
      } catch (err) {
        console.error('Error fetching reviews for store:', err);
        throw new Error('Failed to fetch reviews');
      }
    },
    getReviewsByUser: async (parent, { username }) => {
      try {
        const reviews = await Review.find({ username });
        return reviews;
      } catch (err) {
        console.error('Error fetching reviews by user:', err);
        throw new Error('Failed to fetch reviews');
      }
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
    addReview: async (parent, { storeId, rating, text }, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      
      try {
        // Create a new review with the provided storeId, rating, text, username, and createdAt
        const newReview = await Review.create({ 
          rating, 
          text, 
          username: context.user.username,
          store: storeId // Link review to the store
        });

        // Optionally, you might want to update the store to include this new review
        await Store.findByIdAndUpdate(storeId, {
          $push: { reviews: newReview._id }
        });

        return newReview;
      } catch (error) {
        console.error('Error adding review:', error);
        throw new Error('Failed to add review');
      }
    },
    editReview: async (parent, { reviewId, rating, text }) => {
      try {
        const updatedReview = await Review.findByIdAndUpdate(
          reviewId,
          { rating, text },
          { new: true }
        );
        if (!updatedReview) {
          throw new Error('Review not found');
        }
        return updatedReview;
      } catch (error) {
        console.error('Error updating review:', error);
        throw new Error('Failed to update review');
      }
    },
    deleteReview: async (parent, { reviewId }) => {
      try {
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        if (!deletedReview) {
          throw new Error('Review not found');
        }

        // Optionally, remove the review from the associated store
        await Store.updateMany(
          { reviews: reviewId },
          { $pull: { reviews: reviewId } }
        );

        return deletedReview;
      } catch (error) {
        console.error('Error deleting review:', error);
        throw new Error('Failed to delete review');
      }
    },
    logout: async () => {
      return { message: 'Logged out successfully' };
    }
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
