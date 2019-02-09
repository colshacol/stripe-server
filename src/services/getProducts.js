import stripe from '../stripe'

export default async (ctx) => {
  console.log('/getProducts')

  try {
    return await stripe.products.list(ctx.query)
  } catch (error) {
    return error
  }
}
