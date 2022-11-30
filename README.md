##### ##### ##### ##### ##### ##### ##### ##### #####
 ##### ##### ##### ##### ##### ##### ##### ##### #####
  ##### ##### ##### ##### ##### ##### ##### ##### #####
 ##### ##### ##### ##### ##### ##### ##### ##### #####
##### ##### ##### ##### ##### ##### ##### ##### #####



### This is a project created by Erik Scheive ###

You can contact me at my email, scheiveerik@gmail.com



### Rainforest-Shopping ###

https://rainforest-shopping-production.up.railway.app/



### Technologies Used ###
HTML, CSS, JavaScript, nodeJS, MongoDB
Made using VSCode
Hosted using Railway
learned snippets of code from w3schools

### My Approach ###
I took the approach of creating an e-commerce site similar to Amazon. I wanted an app where users could search for products and interact with them. I envisioned a cart system where users could store the products until they are ready to buy, and a review system for the products as well.  

### Installation ###
#To install, download files into a directory together. either host on a personal server or upload to an online server or visit the site online.


### Route Table ###

|       **URL**       | **HTTP Verb** | **REST Action** | **CRUD Action** |   **EJS View**   | **Models Affected** | **Created Yet?**  |
| ------------------- | ------------- | --------------- | --------------- | ---------------- | ------------------- | ----------------- |
| /                   | GET           | index           | read            | home.ejs         | product             | YES               |
| /product/:id        | GET           | show            | read            | showProduct.ejs  | product, review     | YES               |
| /product/new        | GET           | new             | read            | newProduct.ejs   | product             | YES               |
| /product/:id        | POST          | create          | create          | showProduct.ejs  | product, review     | YES               |
| /product/:id/edit   | GET           | edit            | read            | editProduct.ejs  | product             | YES               |
| /product/:id        | PATCH/PUT     | update          | update          | showProduct.ejs  | product             | YES               |
| /product/:id        | DELETE        | destroy         | delete          | home.ejs         | product             | YES               |
| /product/:id/buy    | POST          | create          | read            | showProduct.ejs  | product             | YES               |
| /review             | POST          | new             | create          | showProduct.ejs  | review              | YES               |
| /user/new           | GET           | show            | read            | newAccount.ejs   | user                | YES               |
| /user/signIn        | GET           | show            | read            | signIn.ejs       | user                | YES               |
| /user               | GET           | show            | read            | account.ejs      | user                | YES               |
| /user               | POST          | create          | create          | signIn.ejs       | user                | YES               |


### User Stories ###

As HR, I want to see a website that clearly demonstrates a knowledge in the field
As an engineer, i want to see the devs code and work so that i can evaluate their skills
As a professional connection, I want a project that I can show off for my friend/colleague
As a friend, I want to see what my friend has accomplished


### MVP Goals ###

home page with links to account, cart, and a function search bar
account page that shows details and recent purchases
cart that keeps track of things user is interested in buying
search bar that helps clients navigate the site
product pages that show more info about the products

### Stretch Goals ###
 
a nav bar on the side that lets users sort products by alphabetical, or price
log in page that has a password
dynamic home page that shows popular products



### Wireframes ###

![](wireframs%20for%20shop%20site/Home.png)
![](wireframs%20for%20shop%20site/Sign%20in.png)
![](wireframs%20for%20shop%20site/Cart.png)
![](wireframs%20for%20shop%20site/Products.png)
![](wireframs%20for%20shop%20site/Profile.png)
![](wireframs%20for%20shop%20site/buy%20again.png)



### Hurdles ###

user authentication was a stretch goal that i couldn't figure out

Cart functionality was a stretch goal that I attempted but also couldn't get functional

Review system is a stretch goal where i set up the means to leave reviews, but still need to figure out how to display them for the products