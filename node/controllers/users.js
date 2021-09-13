const mongoose = require('mongoose')
const User = require('../models/user')
const Search = require('../models/searches')

module.exports = {
    saveUser: (async (req, res) => {
        console.log("hello")
        const { email, password } = req.body;
        console.log(email)

        const user = new User({
            _id: mongoose.Types.ObjectId(),
            email: email, password: password, searches: []
        })
        console.log(user)
        user.save().then(() => {
            console.log("hgggggggggg")
            res.status(200).json({
                user
            })

        })
            .catch(error => {
                res.status(500).json({
                    message: 'user save failed'
                })
            })


    })
}