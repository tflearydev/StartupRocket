const express = require('express')
const Startup = require('../models/Startup.js')
const Member = require('../models/Member.js')
// const Investor = require('../models/Investor.js')
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
//////

  // router.get('/investors/', (req, res) => {
  //   Investor.find()
  //       .then(investors => {
  //         res.json(investors)
  //       })
  //       .catch(err => console.log(err))
  //   })

    // router.delete('/investors/:investorId', (req, res) => {
    //   Investor.findByIdAndRemove(req.params.investorId).then(investor => {
    //     investor.save()
    //       res.json('200 status');  
    //   });
    // });

    // router.post('/investors/:investorId', (req, res) => {
    //   Investor.findById(req.params.investorId).then(investor => {
    //   const newInvestor = new Investor({})
    //     investor.push(newInvestor)
    //     investor.save().then(investor => {
    //       res.json(newInvestor)
    //     })
    //   })
    //     })

        // router.post('/investors', (req, res) => {
        //   const newInvestor = new Investor(req.body.investor)
        //   newInvestor
        //     .save()
        //     .then((investor) => {
        //       res.json(investor)
        //     })
        //     .catch((err) => console.log(err))
        // })

//   router.delete('/investors/:investorId/investors/:investorId', (req, res) => {
//   Investor.findById(req.params.investorId).then(investor => {
//     const filteredInvestors = investors.filter(
//       investor => investor._id.toString() !== req.params.investorId
//     )

//     investors = filteredInvestors

//     investor.save().then(investor => {
//       investors = investors.reverse()
//       res.json(investor)
//     })
//   })
// })
// router.delete('/investors/:investorId', (req, res) => {
//   Investor.findById(req.params.investorId).then(investor => {
//     const filteredInvestors = investors.filter(
//       investor => investor._id.toString() !== req.params.investorId
//     )

//     investors = filteredInvestors

//     investor.save().then(investor => {
//       investors = investors.reverse()
//       res.json(investor)
//     })
//   })
// })

// router.patch('/investor/investor/:investorId', (req, res) => {
//   Investor.findById(req.params.investorId).then(investor => {
//     const update = req.body.investor
//     // const investor = investors.id(req.params.investorId)
//     if (update.name) {
//       investor.name = update.name
//     }
//     if (update.netWorth) {
//       investor.netWorth = update.netWorth
//     }
//     if (update.email) {
//       investor.email = update.email
//     }
    

//     investor.save().then(investor => {
//       investors = investors.reverse()
//       res.json(investor)
//     })
//   })
// })




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
  })
  
/////////////

// router.delete('/investors/:investorId', (req, res) => {
//   Investor.findById(req.params.investorId).then(investor => {
//     const filteredInvestors = investors.filter(
//       investor => investor._id.toString() !== req.params.investorId
//     )

//     investors = filteredInvestors

//     investor.save().then(investor => {
//       investors = investors.reverse()
//       res.json(investor)
//     })
//   })
// })

// router.patch('/investor/:investorId', (req, res) => {
//   Investor.findById(req.params.investorId).then(investor => {
//     const update = req.body.investor
//     // const investor = investors.id(req.params.investorId)
//     if (update.name) {
//       member.name = update.name
//     }
//     if (update.netWorth) {
//       member.netWorth = update.netWorth
//     }
//     if (update.email) {
//       member.email = update.email
//     }
    

//     investor.save().then(investor => {
//       investors = investors.reverse()
//       res.json(investor)
//     })
  // })
// })
module.exports = router;