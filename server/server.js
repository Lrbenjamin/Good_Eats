const express = require('express');
const path = require('path');
// import ApolloServer class & express middleware
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
// import JWT authentication
const { authMiddleware } = require('./utils/Auth');

// import the two parts of our GraphQL schema
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs, resolvers
});

// import mongoDB connection
const db = require('./config/connection');

// initialize application
const app = express();

// new instance of ApolloServer using GraphQL schema
const startApolloServer = async () => {
  await server.start();

  // middleware 
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  })};

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Express server running on port ${PORT}!`);
    });
  });
};

// call async function to start the server
startApolloServer();
