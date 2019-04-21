const express = require('express')
const Startup = require('../models/Startup.js')
const Member = require('../models/Member.js')
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

  // /api/startups/:startupId
router.get('/:startupId', (req, res) => {
    Startup.findById(req.params.startupId)
      .then(startup => {
        startup.members = startup.members.reverse()
        res.json(startup)
      })
      .catch((err) => console.log(err))
  })
  
  router.delete("/:startupId", (req, res) => {
      Startup.findByIdAndRemove(req.params.startupId).then(startup => {
        startup.save()
          res.json('200 status');  
      });
    });
  
  router.post('/:startupId/members', (req, res) => {
    Startup.findById(req.params.startupId).then(startup => {
      const newMember = new Member({})
      startup.members.push(newMember)
      startup.save().then(startup => {
        res.json(newMember)
      })
    })
  })
  
  router.delete('/:startupId/members/:memberId', (req, res) => {
    Startup.findById(req.params.startupId).then(startup => {
      const filteredMembers = startup.members.filter(
        member => member._id.toString() !== req.params.memberId
      )
  
      startup.members = filteredMembers
  
      startup.save().then(startup => {
        startup.members = startup.members.reverse()
        res.json(startup.members)
      })
    })
  })
  
  router.patch('/:startupId/members/:memberId', (req, res) => {
    Startup.findById(req.params.startupId).then(startup => {
      const update = req.body.member
      const member = startup.members.id(req.params.memberId)
      if (update.name) {
        member.name = update.name
      }
      if (update.position) {
        member.position = update.position
      }
  
      startup.save().then(startup => {
        startup.members = startup.members.reverse()
        res.json(startup)
      })
    })
  });
  

module.exports = router;