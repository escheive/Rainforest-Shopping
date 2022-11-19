const db = require('./')

const seed_products = [
    {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        type: 'foods',
        purchases: 0,
        SKU: 1001,
        image: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        quantity: 99
    }, {
        name: 'Toy Car',
        description: 'It\'s a toy car',
        type: 'toys',
        purchases: '10',
        SKU: 2001,
        image: 'https://cdn.shopify.com/s/files/1/0049/3732/products/5_1024x1024@2x.jpg?v=1334936803',
        price: 25,
        quantity: 0
    }, {
        name: 'Barry Botter',
        description: 'A wonderful story about a child who grows up to be a world class lizard.',
        type: 'books',
        purchases: '20',
        SKU: 3001,
        image: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        quantity: 1
    }
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