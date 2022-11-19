const db = require("../models")
const express = require('express')
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('newAccount', {
        tabTitle: "Account Creation"
    })
})

// show route
router.get('/username', (req, res) => {
	db.Account.findOne({ 'username': req.account.username._id}, (err, product) => {
		// res.send(product)
		res.render('showAccount', {
			account: account,
			tabTitle: "Account"
		})
	})
})

//create account route
router.post('/account', (req, res) => {
    db.Account.create(req.body, (err, account) => {
        res.redirect('/account')
    })
})



module.exports = router