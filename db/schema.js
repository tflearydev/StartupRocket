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
    investments: {
        type: Number,
        default: 0
    },
    netWorth: {
        type: String,
        default: "Not available"
    }
})


const MemberSchema = new Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    age: {
        type: Number
    }
})

const StartupSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
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

