import stripe from '../stripe'
import timeStamp from 'time-stamp'

export default async (ctx) => {
  console.log(`[${timeStamp('MM/DD/YYYY @ HH:mm:ss')}] /listProducts`)

  try {
    return await stripe.products.list(ctx.query)
  } catch (error) {
    return error
  }
}
