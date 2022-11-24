const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, min: [1, `Must be at least 1, got {VALUE}`], required: true},
        quantity: {type: Number},
        type: {type: String},
        purchases: {type: Number},
        SKU: {type: Number},
        image: {type: String, default: 'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg'}
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product