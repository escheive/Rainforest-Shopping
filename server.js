// ================== //
// == dependencies == //
// ================== //
const express = require('express')
const app = express()
const methodOverride = require('method-override');

// access models
require('dotenv').config()
const db = require('./models')

// access controllers
const productsCtrl = require('./controllers/products')
const usersCtrl = require('./controllers/users')
const cartsCtrl = require('./controllers/cart')
const reviewsCtrl = require('./controllers/reviews')


// TODO; authentication and passwords
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// var password = "Fkdj^45ci@Jad";

const PORT = process.env.PORT



// ================ //
// == middleware == //
// ================ //

app.use(express.static('public'))
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));


// ================ //
// ==== routes ==== //
// ================ //
app.get('/', (req, res) => {
    db.Product.find({}, (err, products) => {
        res.render('home.ejs', {
            products: products,
            tabTitle: 'home'
        })
    })
})


// look at controllers files to handle all routes that begin with certain words
app.use('/product', productsCtrl);
app.use('/user/', usersCtrl);
app.use('/cart/', cartsCtrl);
app.use('/reviews', reviewsCtrl);




// listener_____
app.listen(PORT, () => {
    console.log(`App is running at localhost:${PORT}`)
}) 