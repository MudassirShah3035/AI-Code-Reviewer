const express = require('express')
const GenContent = require('../controllers/aiController')

const router = express.Router()

router.post('/get-response', GenContent)

module.exports  = router