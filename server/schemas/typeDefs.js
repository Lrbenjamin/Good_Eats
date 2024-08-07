const typeDefs = `

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
        reviews: [Review]
    }
    
    type Review {
        _id: ID
        rating: Float
        store: Store
        text: String
        username: String
        createdAt: String
    }

     type Query {
       stores: [Store]
store(storeId: ID!): Store
  reviewsByStore(storeId: ID!): [Review]
    reviewsByUser(username: String!): [Review]

        getAllStores: [Store]
        getStore(storeId: ID!): Store
        getReviewsForStore(storeId: ID!): [Review]
        getReviewsByUser(username: String!): [Review]
    }

     type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addReview(rating: Float!, text: String!, username: String!, createdAt: String!): Review
        editReview(reviewId: ID!, rating: Float!, text: String!): Review
        deleteReview(reviewId: ID!): Review
        logout: Message
    }
`
module.exports = typeDefs;