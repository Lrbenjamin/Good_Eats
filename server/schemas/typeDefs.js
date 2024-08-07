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
`
module.exports = typeDefs;