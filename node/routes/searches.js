const express = require('express')
const router = express.Router()
const { saveSearch } = require('../controllers/searches')

router.post('saveSearch', saveSearch)

module.exports = router;