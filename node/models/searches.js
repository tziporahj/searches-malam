const mongoose = require('mongoose')
const searchSchema = mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Search', searchSchema)