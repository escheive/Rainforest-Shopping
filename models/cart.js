const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = require('./product.js')

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
    subTotal: {
        default: 0,
        type: Number,
    },
    active: {
        type: Boolean,
        default: true
    }
}, 

{ timestamps: true }

);

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart