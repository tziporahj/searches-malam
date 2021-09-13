const mongoose = require('mongoose')
const User = require('../models/user')
const Search = require('../models/searches')


module.exports = {
    saveSearch: (async (req, res) => {
        const { userName, searchName } = req.body;

        const newSearch = new Search({
            _id: mongoose.Types.ObjectId(),
            name: searchName
        })
        newSearch.save()

        User.findOne({ name: userName }).then((userfound) => {
            userfound.push(newsearch)
            userfound.save()
            res.status(200)
        })
            .catch(error => {
                res.status(500)
            })

    })
}