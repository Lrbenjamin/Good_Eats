const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add any other relevant options here
};

mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });