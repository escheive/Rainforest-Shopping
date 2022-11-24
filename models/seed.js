const db = require('./')

const seed_products = [
    {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        type: 'foods',
        price: 5,
        quantity: 99
    }, {
        name: 'Toy Car',
        description: 'It\'s a toy car',
        type: 'toys',
        price: 25,
        quantity: 0
    }, {
        name: 'Barry Botter',
        description: 'A wonderful story about a child who grows up to be a world class lizard.',
        type: 'books',
        price: 7000,
        quantity: 1
    }, {
        name: 'Lettuce',
        description: 'Leaves for a salad, yum.',
        type: 'foods',
        price: 6,
        quantity: 99
    }, {
        name: 'Turnips',
        description: 'Who eats these? Serious question.',
        type: 'foods',
        price: 7,
        quantity: 122
    }, {
        name: 'Cucumber',
        description: "It'/s like a pickle. Wait a minute...",
        type: 'foods',
        price: 8,
        quantity: 144
    }, {
        name: 'Pickle',
        description: 'Wait, and this one kinda looks like a cucumber.',
        type: 'foods',
        price: 4,
        quantity: 33
    }, {
        name: 'Burger',
        description: 'I personally would not order a burger from an ecommerce site. That is just me though.',
        type: 'foods',
        price: 13,
        quantity: 65
    }, {
        name: 'Toy Burger',
        description: 'Likle a burger but you probably should not eat this.',
        type: 'toys',
        price: 10,
        quantity: 91
    }, {
        name: 'Wind Pigs Helicopter',
        description: 'Soar through the skies like a real helicopter pilot, except you are just a regular person in your back yard.',
        type: 'toys',
        price: 43,
        quantity: 16
    }, {
        name: 'Famished Events',
        description: 'Bunch of kids competing when they would rather just be with their families. Pretty sad.',
        type: 'books',
        price: 8,
        quantity: 31
    }, {
        name: 'Resurrecting a Mockingbird',
        description: 'A little bit of futuristic science with emotional themes.',
        type: 'books',
        price: 21,
        quantity: 32
    }, {
        name: 'Bom Baywer',
        description: 'A boy who just likes to get in trouble. He also has a southern draw.',
        type: 'books',
        price: 7,
        quantity: 233
    }, {
        name: `Dante's Fire`,
        description: `Story about a man's dream. Could be factual.`,
        type: 'books',
        price: 16,
        quantity: 25
    },
]

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

// db.User.deleteMany({}, (err, users) => {
//     if (err) {
//         console.log('Error occured in remove', err)
//     } else {
//         console.log('Removed all users')
//     }
// }) 