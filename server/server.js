const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/Auth');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const bodyParser = require('body-parser'); // Add body-parser
const emailRoutes = require('./routes/emailRoutes'); // Add emailRoutes
const cors = require('cors'); // Add cors
require('dotenv').config(); // Add dotenv for environment variables
require('./config/connection');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware // Include authMiddleware in the context of ApolloServer
});

const app = express();

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Add cors middleware
  app.use(cors());

  // Add body-parser middleware
  app.use(bodyParser.json());

  // Add email routes
  app.use('/email', emailRoutes);

  server.applyMiddleware({ app, path: '/graphql' }); // Apply Apollo Server middleware to the Express app at '/graphql'

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Express server running on port ${PORT}!`);
    });
  });
};

startApolloServer();
