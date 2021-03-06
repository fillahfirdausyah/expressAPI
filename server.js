// Express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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
const emasRouter    = require('./src/routes/emas')

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1><center>REST API For Assignments Made By Fillah Firdausyah</h1></center>'));
})
// Route list
app.use('/product', productRouter)
app.use('/user', userRouter)
app.use('/emas', emasRouter)


app.listen(port, () => {
  console.log(`Server Berjalan di http://localhost:${port}`)
})
