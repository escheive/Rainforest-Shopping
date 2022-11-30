const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = require('./review.js')

// build schema for products
const productSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, min: [1, `Must be at least 1, got {VALUE}`], required: true},
        quantity: {type: Number},
        type: {type: String},
        // reference review schema in product so that users can leave reviews
        reviews: [reviewSchema],
        image: {type: String, default: 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg'}
    }
)


// export the model so that it is accessible in 'index.js'
const Product = mongoose.model('Product', productSchema)
module.exports = Product