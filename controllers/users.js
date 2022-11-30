// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()


// route to create new user account
router.get('/new', (req, res) => {
    res.render('newAccount', {
        tabTitle: "Account Creation"
    })
})

// route for sign in page
router.get('/signIn', (req, res) => {
    res.render('signIn', {
        tabTitle: "SignIn"
    })
})

// route for account page after user signs in
router.get('/', (req, res) => {
    res.render('account', {
        username: req.query.username,
        password: req.query.password,
        tabTitle: "/"
    })
})


// TODO; show route for when user authentication is up
// router.get('/username', (req, res) => {
// 	db.Account.findOne({ 'username': req.account.username._id}, (err, product) => {
// 		// res.send(product)
// 		res.render('showAccount', {
// 			account: account,
// 			tabTitle: "Account"
// 		})
// 	})
// })

//create account route
router.post('/', (req, res) => {
    db.Account.create(req.body, (err, accounts) => {
        res.redirect('/user/signIn')
    })
})



module.exports = router