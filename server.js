const express = require('express')
const logger = require('morgan')
const app = express()
//const userController = require('./controllers/userController.js')

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(__dirname + '/client/build/'))

//app.use('/api/users/', userController)

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// listening on 3001 for backend
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})