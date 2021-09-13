const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    searches: [
        { type: mongoose.Types.ObjectId, ref: 'Search' }
    ]
})

module.exports = mongoose.model('User', userSchema)