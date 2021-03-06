const express = require('express')
const logger = require('morgan')
const app = express()
const startupController = require('./controllers/startupController')
const investorController = require('./controllers/investorController')

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(__dirname + '/client/build/'))

app.use('/api/startups/', startupController)
app.use('/api/investors/', investorController)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// listening on 3001 for backend
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})