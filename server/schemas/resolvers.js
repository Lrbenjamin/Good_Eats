const { User, Review, Store } = require('../models'); // Use CommonJS require

const resolvers = {
  Query: {
    stores: async () => {
      const allStores = await Store.find();
      return allStores;
    },
    store: async (parent, { storeId }) => {
      const store = await Store.findById(storeId);
      return store;
    },
    reviewsByStore: async (parent, { storeId }) => {
      const reviews = await Review.find({ store: storeId });
      return reviews;
    },
    reviewsByUser: async (parent, { username }) => {
      const reviews = await Review.find({ username });
      return reviews;
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      try {
        const newUser = await User.create({ username, password });
        const token = generateToken(newUser);
        return { token, user: newUser };
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },
  },
};

module.exports = resolvers; // Use CommonJS export
