const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const cartSchema = new Schema(
    {
        items: [itemSchema],
        subTotal: { default: 0, type: Number }
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart