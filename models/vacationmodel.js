const mongoose = require('mongoose')

// Create the schema:
const vacationsSchema = new mongoose.Schema({
    user_id: String,
    destination_name: String,
    destination_location: String,
    destination_description: String,
    destination_picture: String
})

module.exports = mongoose.model('vacations', vacationsSchema);