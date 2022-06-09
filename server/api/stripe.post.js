import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_TEST_SK)

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const itemprice = 400
  const customerjson = {
    name: body.name ? body.name : '',
    email: body.email ? body.email : '',
    phone: body.phone ? body.phone : '',
    source: body.stripeToken,
  }

  try {
    if (body.type == 'subscribe') {
      const product = await stripe.products.create({
        name: body.productname ? body.productname : 'basic',
      })
      const customer = await stripe.customers.create(customerjson)
      const result = await stripe.subscriptions.create({
        items: [
          {
            price_data: {
              recurring: {
                interval: 'month',
              },
              product: product.id,
              unit_amount: itemprice,
              currency: 'hkd',
            },
          },
        ],

        customer: customer.id,
      })
      return result
    } else {
      const customer = await stripe.customers.create(customerjson)
      const result = await stripe.charges.create({
        amount: itemprice,
        currency: 'hkd',
        customer: customer.id,
      })
      return result
    }
  } catch (err) {
    return e.raw.message
  }
})
