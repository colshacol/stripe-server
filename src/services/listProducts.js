const stripe = require('../shared/stripe')
const micro = require('micro')

const server = micro(async (req, res) => {
  console.log('/listProducts\n\n\n\n\n')

  try {
    const result = await stripe.products.list()
    console.log('SUCCESS /listProducts')
    return result
  } catch (error) {
    console.log('FAIL /listProducts: ', error)
    return error
  }
})

server.listen(8080, (error) => console.log('listening on port 8080'))
