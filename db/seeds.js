require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Startup = require('../models/Startup')
const Member = require('../models/Member')
const Investor = require('../models/Investor')

const yang = new Investor({
    image: 'https://images.pond5.com/young-asian-businessman-pulling-out-footage-023141021_prevstill.jpeg',
    name: 'Aki Yang',
    investments: 4,
    netWorth: '5 million'
})