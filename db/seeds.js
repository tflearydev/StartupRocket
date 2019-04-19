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
const evans = new Investor({
    image: 'https://www.ivyexec.com/career-advice/wp-content/uploads/2018/05/characteristics-define-higher-level-professionals.jpg',
    name: 'Halen',
    investments: 1,
    netWorth: '500 thousand'
})
const cox = new Investor({
    image: 'https://media.licdn.com/dms/image/C5603AQHdsCNAoV3MVg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=TO7nT3X5kf1iYojlKCarGiRQ4AcZ3bIRIi7ia8CSycc',
    name: 'Katelyn',
    investments: 2,
    netWorth: '1 million'
})


const fleary = new Member({
    name: 'Tray Fleary',
    position: 'CTO',
    age: 24
})
const hammond = new Member({
    name: 'Paul Hammond',
    position: 'Full Stack Developer',
    age: 28
})
const xing = new Member({
    name: 'Xu Xing',
    position: 'User Experience Designer',
    age: 32
})

const auto = new Startup({
    name: 'AutoPocket',
    email: 'contact@autopocket.com',
    phone: '404-555-1559',
    previousFunding: 'No',
    website: 'www.AutoPocket.com',
    members: [fleary, hammond, xing]
})

Startup.deleteMany({})
  .then(() => auto.save())
  .then(() => console.log('Saved to MongoDB'))
  .then(() => mongoose.connection.close())

Investor.remove({})
  .then(() => auto.save())
  .then(() => Investor.create([yang, evans, cox]))
  .then(() => mongoose.connection.close())
