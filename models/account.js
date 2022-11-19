const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String},
        image: {type: String, default: 'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg'}
    }
)

const Account = mongoose.model('Account', accountSchema)

module.exports = Account