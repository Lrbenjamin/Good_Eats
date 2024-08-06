const typeDefs = `
    type Review {
        _id: ID
        rating: Float
        business: Business
        text: String
        username: String
        createdAt: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }
    
    type Business {
        _id: ID
        name: String
        zipcode: String
        website: String
    }
    
    type User {
        _id: ID
        username: String
        firstName: String
        email: String
        password: String
        reviews: [Review]!
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        reviews: [Review]!
        review(reviewID: ID!): Review
        businesses: [Business]!
        business(businessID: ID!): Business
        users: [User]
        userProfile(username: String!): User
        reviewsByUser(username: String): [Review]
        reviewsByZipcode(zipcode: String!): [Review]
    }

    type Mutation {
        addReview(username: String!, businessId: String!, text: String!): Review
        addComment(reviewId: ID!, username: String! commentText: String!): Review
        addUser(username: String!, firstName: String, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        deleteReview(reviewId: ID!): Review
        deleteComment(reviewId: ID!, commentId: ID!): Review
        deleteUser(userID: ID!): User
        deleteBusiness(businessID: ID!): Business
    }
`
// addBusiness(name: String!, zipcode: String!, website: String!): Business
// comments OPT
// needs logic to calc radius

module.exports = typeDefs;