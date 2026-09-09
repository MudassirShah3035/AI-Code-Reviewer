const express = require('express')
const cors = require('cors')
const router = require('./routes/aiRoutes')


const app = express()
app.use(cors({
  origin : 'http://localhost:5173',
  credentials : true
}))
app.use(express.json())

app.use('/ai', router)


module.exports = app