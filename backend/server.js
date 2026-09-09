require('dotenv').config()
const app = require('./src/app.js')


const PORT = process.env.PORT || 4008
app.listen(PORT, ()=>{
  console.log(`Server runs at http://localhost:${PORT}`)
})