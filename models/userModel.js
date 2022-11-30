const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a model for user accounts that includes name, email, and password
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }, 
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    //give different access rights if admin or not 
    isAdmin: Boolean
});

// export the model so that it is accessible in 'index.js'
const User = mongoose.model('User', UserSchema);
module.exports = User;