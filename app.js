require('dotenv').config()

const express    = require('express')
const socket     = require('socket.io')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

    app.use(bodyParser.urlencoded({ extended:false }))
    app.use(bodyParser.json())
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.render('error', {
        message: err.message,
        error: {}
  })
})

const PORT  = process.env.PORT || 8080

app.listen( PORT, () => {
  console.log('Server running on port', PORT)
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
})

app.use('/', require('./home'))