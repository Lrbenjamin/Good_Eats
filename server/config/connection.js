const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://admin:admin@clusty.dxahynu.mongodb.net/?retryWrites=true&w=majority&appName=clusty'
);

module.exports = mongoose.connection;