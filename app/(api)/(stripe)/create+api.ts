import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST(request: Request) {
  const body = await request.json(); ///! extracting body from request
  console.log("body__request__", body);
  const { name, email, amount } = body;

  if (!name || !email || !amount) {
    return new Response(JSON.stringify({ error: "Missing reqiured fields" }), {
      status: 400,
    });
  }

  let customer;
  // ! check customer exisited on the stripe already?
  const existingCustomer = await stripe.customers.list({ email });

  if (existingCustomer.data.length > 0) {
    customer = existingCustomer.data[0];
  } else {
    const newCustomer = await stripe.customers.create({
      name,
      email,
    });
    customer = newCustomer;
  }

  //   ! create customer unique key - empheral key
  const empheralKey = await stripe.ephemeralKeys.create({
    customer: customer.id,
    apiVersion: "2024-06-20", //! need to know about this
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(amount) * 100, //! because the data is coming as cent
    currency: "usd",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  return new Response(
    JSON.stringify({
      paymentIntent: paymentIntent,
      empheralKey: empheralKey,
      customer: customer.id,
    })
  );
}
