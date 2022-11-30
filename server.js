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
// passwords
const bcrypt = require("bcrypt");
const saltRounds = 10;
var password = "Fkdj^45ci@Jad";
const PORT = process.env.PORT



// ================ //
// == middleware == //
// ================ //

app.use(express.static('public'))
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

hash = 0

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        bcrypt.compare(password, hash, function(err, result) {
            if (result) {
                console.log("It matches!")
            } else {
                console.log("Invalid password!");
            }
            // returns result
        });
        console.log(hash);
    });
    // returns salt
});

bcrypt.compare(password, hash, function(err, result) {
    if (result) {
        console.log("It matches!")
    } else {
        console.log("Invalid password!");
    }
    // returns result
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


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

app.get('/about', (req, res) => {
        res.render('aboutUs.ejs', {
            tabTitle: 'About'
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