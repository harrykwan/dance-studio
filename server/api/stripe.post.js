import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_TEST_SK)

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  try {
    const itemprice = 400
    const customerjson = {
      name: body.name ? body.name : 'asdf',
      email: body.email ? body.email : 'asdf@gmail.com',
      phone: body.phone ? body.phone : '66581248',
      source: body.stripeToken,
    }

    const product = await stripe.products.create({
      name: 'basic',
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
  } catch (err) {
    return e.raw.message
  }
})
