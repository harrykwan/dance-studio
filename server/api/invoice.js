import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_TEST_SK)

export default defineEventHandler(async (event) => {
  const query = useQuery(event)

  try {
    const invoice = await stripe.invoices.retrieve(query.id)
    return invoice
  } catch (err) {
    return err.raw.message
  }
})
