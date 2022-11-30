const db = require('./')

// file to seed database with some test products
const seed_products = [
    {
        name: 'Beans',
        description: 'Like the ones at your local grocer',
        type: 'foods',
        price: 5,
        quantity: 99,
        reviews: [],
        image: "https://www.seriouseats.com/thmb/mZn4RCinpBV-ONNkvMabIGq4rJY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__07__20160707-legumes-red-kidney-beans-vicky-wasik-4-7835e58628a94f3fba1ad8d2defc3137.jpg"
    }, {
        name: 'Toy Car',
        description: 'It\'s a toy car',
        type: 'toys',
        price: 25,
        quantity: 0,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/41dx+mGmfgL._AC_.jpg"
    }, {
        name: 'Barry Botter',
        description: 'A wonderful story about a child who grows up to be a world class lizard.',
        type: 'books',
        price: 7000,
        quantity: 1,
        reviews: [],
        image: "https://th-thumbnailer.cdn-si-edu.com/x33MSpps0XoKiZCE1Z6vofJwXTM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/blogging/featured/A_green_and_white-spotted_lizard_on_orange_surface.jpg"
    }, {
        name: 'Lettuce',
        description: 'Leaves for a salad, yum.',
        type: 'foods',
        price: 6,
        quantity: 99,
        reviews: [],
        image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg"
    }, {
        name: 'Turnips',
        description: 'Who eats these? Serious question.',
        type: 'foods',
        price: 7,
        quantity: 122,
        reviews: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/800px-Turnip_2622027.jpg"
    }, {
        name: 'Cucumber',
        description: "It'/s like a pickle. Wait a minute...",
        type: 'foods',
        price: 8,
        quantity: 144,
        reviews: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/ARS_cucumber.jpg"
    }, {
        name: 'Pickle',
        description: 'Wait, and this one kinda looks like a cucumber.',
        type: 'foods',
        price: 4,
        quantity: 33,
        reviews: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pickle.jpg"
    }, {
        name: 'Burger',
        description: 'I personally would not order a burger from an ecommerce site. That is just me though.',
        type: 'foods',
        price: 13,
        quantity: 65,
        reviews: [],
        image: "https://media-cdn.tripadvisor.com/media/photo-s/18/9c/13/fb/top-rated-in-seattle.jpg"
    }, {
        name: 'Toy Burger',
        description: 'Like a burger but you probably should not eat this.',
        type: 'toys',
        price: 10,
        quantity: 91,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/41LV9R7zGYL._AC_SY580_.jpg"
    }, {
        name: 'Wind Pigs Helicopter',
        description: 'Soar through the skies like a real helicopter pilot, except you are just a regular person in your back yard.',
        type: 'toys',
        price: 43,
        quantity: 16,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/41p60212sgL._AC_.jpg"
    }, {
        name: 'Famished Events',
        description: 'Bunch of kids competing when they would rather just be with their families. Pretty sad.',
        type: 'books',
        price: 8,
        quantity: 31,
        reviews: [],
        image: "https://dictionary.cambridge.org/fr/images/thumb/book_noun_001_01679.jpg?version=5.0.275"
    }, {
        name: 'Resurrecting a Mockingbird',
        description: 'A little bit of futuristic science with emotional themes.',
        type: 'books',
        price: 21,
        quantity: 32,
        reviews: [],
        image: "https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg?w=2000"
    }, {
        name: 'Bom Baywer',
        description: 'A boy who just likes to get in trouble. He also has a southern draw.',
        type: 'books',
        price: 7,
        quantity: 233,
        reviews: [],
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/24595415/1297476103.jpg"
    }, {
        name: `Dante's Fire`,
        description: `Story about a man's dream. Could be factual.`,
        type: 'books',
        price: 16,
        quantity: 25,
        reviews: [],
        image: "https://damonza.com/wp-content/uploads/2018/07/shutterstock_540163171.jpg"
    }, {
        name: `Mego Blocks`,
        description: `Little plastic building blocks that hurt to step on.`,
        type: 'toys',
        price: 11,
        quantity: 34,
        reviews: [],
        image: "https://cdn.britannica.com/48/182648-050-6C20C6AB/LEGO-bricks.jpg"
    }, {
        name: `Mouse`,
        description: `Mediocre mouse for what can only be assumed to be a mediocre computer.`,
        type: 'electronics',
        price: 44,
        quantity: 12,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/31aLihyOu-L._AC_.jpg"
    }, {
        name: `Christmas Lights`,
        description: `Year round holiday selection.`,
        type: 'electronics',
        price: 11,
        quantity: 22,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/616cPsYMtsL._AC_.jpg"
    }, {
        name: `Coconut Water`,
        description: `Water from a coconut`,
        type: 'foods',
        price: 6,
        quantity: 55,
        reviews: [],
        image: "https://post.healthline.com/wp-content/uploads/2021/08/coconut-water-1200x628-facebook-1200x628.jpg"
    }, {
        name: `Laptop`,
        description: `Portable computer.`,
        type: 'electronics',
        price: 454,
        quantity: 33,
        reviews: [],
        image: "https://www.renderhub.com/laserfase/generic-laptop/generic-laptop-01.jpg"
    }, {
        name: `Desktop`,
        description: `Non-portable computer`,
        type: 'electronics',
        price: 889,
        quantity: 10,
        reviews: [],
        image: "https://atlas-content-cdn.pixelsquid.com/assets_v2/246/2469667326039955024/jpeg-600/G03.jpg?modifiedAt=1"
    }, {
        name: `Flashlight`,
        description: `Portable light stick.`,
        type: 'electronics',
        price: 23,
        quantity: 23,
        reviews: [],
        image: "https://images.thdstatic.com/productImages/8b567322-2a92-4ef6-b40d-1e3419e6436d/svn/coast-handheld-flashlights-21864-64_1000.jpg"
    }, {
        name: `Headphones`,
        description: `Listen to music by yourself.`,
        type: 'electronics',
        price: 87,
        quantity: 31,
        reviews: [],
        image: "https://m.media-amazon.com/images/I/31l39jWkENL._AC_SY350_.jpg"
    },
]


// function to clear products database and then re-seed. from home project directory enter 'node models/seed.js'
db.Product.deleteMany({}, (err, products) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all products')

        db.Product.insertMany(seed_products, (err, products) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', products.length, "products")
            }
        })
    }
})


// function to reset the users database for testing
// db.User.deleteMany({}, (err, users) => {
//     if (err) {
//         console.log('Error occured in remove', err)
//     } else {
//         console.log('Removed all users')
//     }
// }) 