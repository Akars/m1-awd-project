const express = require('express')
const session = require('express-session')
const path = require('path')

const apiRouter = require('./routes/api.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))
app.use(express.static(path.join(__dirname, '../client')))

app.use('/api/', apiRouter)

module.exports = app