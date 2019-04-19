const express = require('express')
const Startup = require('../models/Startup.js')
// const Member = require('../models/Member.js')
const router = express.Router()

router.get('/', (req, res) => {
    Startup.find()
      .then(startups => {
        res.json(startups)
      })
      .catch(err => console.log(err))
  })
  
  router.post('/', (req, res) => {
    const newStartup = new Startup(req.body.startup)
    newStartup
      .save()
      .then((startup) => {
        res.json(startup)
      })
      .catch((err) => console.log(err))
  })

module.exports = router;