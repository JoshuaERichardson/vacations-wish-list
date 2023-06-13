const mongoose = require('mongoose')

// Create the schema:
const userSchema = new mongoose.Schema({
    given_name: String,
    family_name: String,
    picture: String,
})

module.exports = mongoose.model('users', userSchema);