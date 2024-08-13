const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/Auth');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');
require('dotenv').config();
require('./config/connection');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

const startApolloServer = async () => {
  await server.start();

  // Add CORS middleware first
  app.use(cors());

  // Add other middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(bodyParser.json());

  // Add email routes
  app.use('/email', emailRoutes);

  server.applyMiddleware({ app, path: '/graphql' });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
    });
  }
  

  mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Express server running on port ${PORT}!`);
    });
  });
};

startApolloServer();
