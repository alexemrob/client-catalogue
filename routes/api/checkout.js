const router = require("express").Router();

const stripe = require("stripe")
    (process.env.STRIPE_KEY);
const uuid = require("uuid");


//Stripe routes
router.route("/")
    .get((req, res) => {
        res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
    })
    .post(async (req, res) => {
        console.log("Request:", req.body);
        let error;
        let status;
        try {
            const { product, token } = req.body;
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });
            const idempotency_key = uuid.v4();
            const charge = await stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: "usd",
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `Paid the ${product.name}`
                    ,
                    shipping: {
                        name: token.card.name,
                        address: {
                            line1: token.card.address_line1,
                            line2: token.card.address_line2,
                            city: token.card.address_city,
                            country: token.card.address_country,
                            postal_code: token.card.address_zip
                        }
                    }
                },
                {
                    idempotency_key
                }
            );
            console.log("Charge:", { charge });
            status = "success";
        } catch (error) {
            console.error("Error:", error);
            status = "failure";
        }
        res.json({ error, status });
    });

module.exports = router;