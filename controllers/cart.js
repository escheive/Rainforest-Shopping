const db = require("../models")
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('cart', {

        tabTitle: "Cart"
    })
})


module.exports = router