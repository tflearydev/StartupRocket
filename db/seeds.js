require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Startup = require('../models/Startup')
const Member = require('../models/Member')
const Investor = require('../models/Investor')

const 