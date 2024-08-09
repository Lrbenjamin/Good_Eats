const { gql } = require('apollo-server-express'); // Use 'apollo-server-express' for CommonJS

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    reviews: [Review]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Message {
    message: String
  }

  type Store {
    _id: ID
    name: String
    zipcode: String
    website: String
    address: String
    contact: String
    image: String
    reviews: [Review]
  }

  type Review {
    _id: ID
    rating: Int
    store: Store  # Optionally include this if you want to link back to the store
    text: String
    username: String
    createdAt: String
  }

  type Query {
    getAllStores: [Store]
    getStore(storeId: ID!): Store
    getReviewsForStore(storeId: ID!): [Review]
    getReviewsByUser(username: String!): [Review]
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addReview(storeId: ID!, rating: Int!, text: String!): Review  # Added storeId to mutation
    editReview(reviewId: ID!, rating: Int!, text: String!): Review
    deleteReview(reviewId: ID!): Review
    logout: Message
  }
`;

module.exports = typeDefs;
