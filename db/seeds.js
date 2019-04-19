require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Startup = require('../models/Startup')
const Member = require('../models/Member')
const Investor = require('../models/Investor')

const yang = new Investor({
    image: 'https://images.pond5.com/young-asian-businessman-pulling-out-footage-023141021_prevstill.jpeg',
    name: 'Aki Yang',
    netWorth: '5 million',
    email: 'akiyang@invest.com'
})
const evans = new Investor({
    image: 'https://www.ivyexec.com/career-advice/wp-content/uploads/2018/05/characteristics-define-higher-level-professionals.jpg',
    name: 'Halen Evans',
    netWorth: '500 thousand',
    email: 'evans@global.com'
})
const cox = new Investor({
    image: 'https://media.licdn.com/dms/image/C5603AQHdsCNAoV3MVg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=TO7nT3X5kf1iYojlKCarGiRQ4AcZ3bIRIi7ia8CSycc',
    name: 'Katelyn Cox',
    netWorth: '1 million',
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
    image: 'https://ph-files.imgix.net/c2e96595-d755-43b2-b2c7-d648a3a10d5b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    name: 'Mercury.Co',
    industry: 'banking app',
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
