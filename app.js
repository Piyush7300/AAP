// Import required modules
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/database')

connectDB();



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// Routes
const userRoutes = require('./route/user.routes');
// const healthRoutes = require('./routes/healthRoutes');
// const ringRoutes = require('./routes/ringRoutes');

app.use('/api/user', userRoutes);
// app.use('/api/health', healthRoutes);
// app.use('/api/ring', ringRoutes);



module.exports = app;