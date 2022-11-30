// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

// get route for the cart page
router.get('/', (req, res) => {
    res.render('cart', {

        tabTitle: "Cart"
    })
})


// TODO; add functionality for the cart and more options for the cart page

module.exports = router