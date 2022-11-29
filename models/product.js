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
        image: {type: String, default: 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg'}
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product