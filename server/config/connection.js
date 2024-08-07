const mongoose = require('mongoose');

// MongoDB connection URI
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@clusty.dxahynu.mongodb.net/?retryWrites=true&w=majority&appName=clusty';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add any other relevant options here
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Optionally, exit the process if connection fails
    process.exit(1);
  });

// Handle connection errors after initial connection
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Handle successful reconnection
mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected');
});

// Handle disconnection
mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

// Handle process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});
