const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const InvestorSchema = new Schema({
    image: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/en/d/d3/No-picture.jpg"
    },
    name: {
        type: String,
        default: "Investor"
    },
    netWorth: {
        type: String,
        default: "Not available"
    },
    email: {
        type: String,
        default: "Email Here"
    }
})

const MemberSchema = new Schema({
    name: {
        type: String
    },
    position: {
        type: String
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
        default: 'industry?'
    },
    previousFunding: {
        type: String,
        default: 'N/A'
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

