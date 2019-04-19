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
        type: String
    },
    name: {
        type: String
    },
    industry: {
        type: String
    },
    previousFunding: {
        type: String
    },
    website: {
        type: String
    },
    members: [MemberSchema]
})



module.exports = {
    InvestorSchema: InvestorSchema,
    MemberSchema: MemberSchema,
    StartupSchema: StartupSchema
  }

