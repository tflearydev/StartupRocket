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
        type: String,
        default: "No investment history"
    },
    netWorth: {
        type: String,
        default: "Not available"
    }
})



module.exports = {
    InvestorSchema: InvestorSchema,
    MemberSchema: MemberSchema,
    StartupSchema: StartupSchema
  }

