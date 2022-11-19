// ================== //
// == dependencies == //
// ================== //
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override');
// access models
const db = require('./models')
// access controllers
const productsCtrl = require('./controllers/products')
const accountCtrl = require('./controllers/account')


// ================ //
// == middleware == //
// ================ //

app.use(express.static('public'))
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

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

// look at controllers/products.js to handle all routes that begin with `localhost:3000/product`
app.use('/product', productsCtrl)
app.use('/account', accountCtrl)




// listener_____
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
}) 