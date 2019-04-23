require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Startup = require('../models/Startup')
const Member = require('../models/Member')
const Investor = require('../models/Investor')

const yang = new Investor({
    image: 'https://images.pond5.com/young-asian-businessman-pulling-out-footage-023141021_prevstill.jpeg',
    name: 'Aki Yang',
    netWorth: '$5m',
    email: 'akiyang@invest.com'
})
const evans = new Investor({
    image: 'https://www.ivyexec.com/career-advice/wp-content/uploads/2018/05/characteristics-define-higher-level-professionals.jpg',
    name: 'Halen Evans',
    netWorth: '$500k',
    email: 'evans@global.com'
})
const cox = new Investor({
    image: 'https://media.licdn.com/dms/image/C5603AQHdsCNAoV3MVg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=TO7nT3X5kf1iYojlKCarGiRQ4AcZ3bIRIi7ia8CSycc',
    name: 'Katelyn Cox',
    netWorth: '$1m',
    email: 'katelyncox@ventures.com'
})

const immad = new Member({
    name: 'Immad Akhund',
    position: 'CEO',
})
const max = new Member({
    name: 'Max Tagher',
    position: 'CTO',
})
const jason = new Member({
    name: 'Jason Zhang',
    position: 'COO',
})

const mercury = new Startup({
    image: 'data:image/png;base64,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',
    name: 'Mercury.Co',
    industry: 'Banking',
    previousFunding: 'Yes',
    website: 'https://mercury.co/',
    members: [immad, max, jason]
})

Startup.deleteMany({})
  .then(() => mercury.save())
  .then(() => console.log('Saved to MongoDB'))
  .then(() => mongoose.connection.close())

Investor.remove({})
  .then(() => Investor.create([yang, evans, cox]))
  .then(() =>  mongoose.connection.close())
  .catch(err => console.log(err, "error!"));
