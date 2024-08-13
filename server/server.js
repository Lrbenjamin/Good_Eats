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
  try {
    await server.start();
    console.log('Apollo Server started');

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Add cors middleware
    app.use(cors());

    // Add body-parser middleware
    app.use(bodyParser.json());

    // Add email routes
    app.use('/email', emailRoutes);

    server.applyMiddleware({ app, path: '/graphql' });
    console.log('Apollo Server middleware applied');

    if (process.env.NODE_ENV === 'production') {
      console.log('Production environment detected, serving static files');
      app.use(express.static(path.join(__dirname, '../client/dist')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }

    mongoose.connection.once('open', () => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
        console.log(`Express server running on port ${PORT}!`);
      });
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  } catch (err) {
    console.error('Error starting Apollo Server:', err);
  }
};

startApolloServer();

