const express = require('express')
const router = express.Router()
const { saveUser } = require('../controllers/users')

router.post('/saveUser', saveUser)
module.exports = router;