const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  if (req.method === 'POST') {

    console.log(req.body)

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data:{
                currency:'USD',
                product_data:{
                    name:'Startup Subscription',
                    description:'All the basics for starting a new business! - 500 Documents p/ mont - Profile Searc - Technical Suppor - Profiles Back U - AI Job Description Matching'
                },
                unit_amount:3200
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?type=startup`,
        cancel_url: `${req.headers.origin}/dashboard`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}