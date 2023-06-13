const mongoose = require('mongoose')

// Requirements for Mongo:
const MongoClient = require('mongodb').MongoClient
const mongoConnection = 'mongodb+srv://visiblePassword:Q66snvk522O4acn0@vacation.1qa4ceh.mongodb.net/vacations'
// Mongoose:
mongoose.connect(mongoConnection, { useNewUrlParser: true })
const db = mongoose.connection
// Just to test db connection:
db.once('open', _ => {
  console.log('Database connected: ', mongoConnection)
})
db.on('error', err => {
  console.log('Connection error:', err)
})



// // Constructor for a new document:
// const VacationModel = require('./vacationmodel')

// // Access to CRUD operations:
// const VacationCRUD = require('./vacationcrud.js')

module.exports = {
    db,
}

