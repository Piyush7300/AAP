const dotenv = require('dotenv');

dotenv.config();

envService  = { 
  MONGODB_URI: process.env.MONGODB_URI
}

module.exports = envService