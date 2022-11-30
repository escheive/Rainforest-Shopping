// dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');



// Create Route: POST localhost:3000/reviews/
router.post('/', (req, res) => {
    db.Product.findByIdAndUpdate( req.body.productId,
        { $push: { reviews: req.body } },
        // { new: true },
        (err, product) => {
            res.render('/product/' + product._id)
        })
});

// export routes so they are accessible in `server.js`
module.exports = router;