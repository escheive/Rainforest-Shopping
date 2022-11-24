const db = require("../models")
const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('newProduct', {
        tabTitle: "Product Creation"
    })
})


// show route
router.get('/:id', (req, res) => {
	db.Product.findById(req.params.id, (err, product) => {
		// res.send(product)
		res.render('showProduct', {
			product: product,
			tabTitle: "Product page"
		})
	})
})
  
//create product route
router.post('/', (req, res) => {
    db.Product.create(req.body, (err, product) => {
        res.redirect('/')
    })
})


// delete route
router.delete('/:id', (req, res) => {
	db.Product.findByIdAndRemove(req.params.id, (err, product) => {

		res.redirect('/')
	})
	// res.send(req.params.id)
})


// update route
router.put('/:id', (req, res) => {
	db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, product) => {
		// res.send(product)
		res.redirect('/product/' + product._id)
	})
})


// edit ejs route
router.get('/:id/edit', (req, res) => {
	db.Product.findById(req.params.id, (err, product) => {
		res.render('editProduct', {
			product: product,
			tabTitle: 'Edit'
		})
	})
})

// buy route

router.post('/:id/buy', (req,res) => {
	db.Cart.findByIdAndUpdate(req.body.cartId, {$inc: {'quantity': -1}}, (err, product) => {
		$push: { products: req.body} },
		{ new: true },
		res.redirect('/product/'+ product._id))
})

module.exports = router