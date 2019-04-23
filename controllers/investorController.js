const express = require('express')
// const Startup = require('../models/Startup.js')
// const Member = require('../models/Member.js')
const Investor = require('../models/Investor.js')
const router = express.Router()

router.get('/investors/', (req, res) => {
    Investor.find()
        .then(investors => {
          res.json(investors)
        })
        .catch(err => console.log(err))
    })

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

        router.post('/investors/', (req, res) => {
          const newInvestor = new Investor(req.body.investor)
          newInvestor
            .save()
            .then((investor) => {
              res.json(investor)
            })
            .catch((err) => console.log(err))
        })

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
router.delete('/investors/', (req, res) => {
  Investor.findById(req.params.investorId).then(investor => {
    const filteredInvestors = investors.filter(
      investor => investor._id.toString() !== req.params.investorId
    )

    investors = filteredInvestors

    investor.save().then(investor => {
      investors = investors.reverse()
      res.json(investor)
    })
  })
})

router.patch('/investors/:investorId', (req, res) => {
  Investor.findById(req.params.investorId).then(investor => {
    const update = req.body.investor
    // const investor = investors.id(req.params.investorId)
    if (update.name) {
      investor.name = update.name
    }
    if (update.netWorth) {
      investor.netWorth = update.netWorth
    }
    if (update.email) {
      investor.email = update.email
    }
    

    investor.save().then(investor => {
      investors = investors.reverse()
      res.json(investor)
    })
  })
})

module.exports = router;
