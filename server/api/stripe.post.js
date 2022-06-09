import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_TEST_SK)

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const result = await new Promise((resolve, reject) => {
    try {
      const courseprice = 300
      const customerjson = {
        name: body.name ? body.name : '',
        email: body.email ? body.email : '',
        phone: body.phone ? body.phone : '',
        source: body.stripeToken,
      }

      stripe.customers.create(customerjson).then((customer) =>
        stripe.charges
          .create({
            amount: courseprice,
            currency: 'hkd',
            mode: 'subscription',
            customer: customer.id,
          })
          .then((x) => {
            resolve(x)
          }),
      )
    } catch (err) {
      console.log(err.type)
      reject(err)
    }
  })
  return res.status(200).json(result)
})
