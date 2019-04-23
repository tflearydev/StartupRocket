const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const InvestorSchema = new Schema({
    image: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/en/d/d3/No-picture.jpg"
    },
    name: {
        type: String,
        default: "Investor Name"
    },
    netWorth: {
        type: String,
        default: "Net Worth"
    },
    email: {
        type: String,
        default: "Email"
    }
})

const MemberSchema = new Schema({
    name: {
        type: String,
        default: "Name"
    },
    position: {
        type: String,
        default: "Role"
    }
})

const StartupSchema = new Schema({
    image: {
        type: String,
        default: "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2014/08/startup-1024x1024.jpg",
    },
    name: {
        type: String,
        default: 'Startup Name'
    },
    industry: {
        type: String,
        default: 'Industry?'
    },
    previousFunding: {
        type: String,
        default: 'Previous Funding?'
    },
    website: {
        type: String,
        default: 'https://en.wikipedia.org/wiki/Startup_company',
    },
    members: [MemberSchema]
})



module.exports = {
    InvestorSchema: InvestorSchema,
    MemberSchema: MemberSchema,
    StartupSchema: StartupSchema
  }

