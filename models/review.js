// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// build schema for reviews collection
const reviewSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

// export the schema so that it is accessible in 'index.js'
module.exports = reviewSchema;