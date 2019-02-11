const dotenv = require('dotenv')
const stripe = require('stripe')

dotenv.config()

module.exports = stripe(process.env.STRIPE_API_KEY)
