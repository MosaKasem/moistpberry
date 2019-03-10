const express    = require('express')
const socket     = require('socket.io')
const bodyParser = require('body-parser')

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

