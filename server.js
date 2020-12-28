// Express
const express = require('express')
const app = express()
const port = 3000

// Mysql
const db = require('./database');

// Url Endcoded
app.use(express.urlencoded({extended: true}))

// Cors
const cors = require('cors');

// Serve Static File in 'Public' Folder
app.use(express.static('public'))
// Allow Cors
app.use(cors())

// Route
const productRouter = require('./src/routes/products')
const userRouter    = require('./src/routes/user')

// Route list
app.use('/product', productRouter)
app.use('/user', userRouter)

// Boot Server
app.listen(process.env.PORT || port, () => {
  console.log(`Server Berjalan di http://localhost:${port}`)
})
