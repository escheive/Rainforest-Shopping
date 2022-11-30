
require('dotenv').config()
const mongoose = require("mongoose");

// connect to MongoDB via mongoose
const connectionString = process.env.MONGODBURI
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

// access models
module.exports.Product = require('./product.js')
module.exports.productSchema = require('./product.js')
module.exports.User = require('./userModel.js')
module.exports.Cart = require('./cart.js')