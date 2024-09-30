const mongoose = require('mongoose');
const envService = require('./env.service');

if (!envService) {
  throw new Error('envService is not defined');
}

const connectDB = async () => {
  try {
    await mongoose.connect(envService.MONGODB_URI, {
    });
    console.log('Database Connected successfully ');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;