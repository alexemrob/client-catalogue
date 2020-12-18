import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Checkout() {
    const APIKEY= process.env.STRIPE_KEY
    const [product] = React.useState({
        name: "Appointment Deposit",
        price: 100.00
    });
    async function handleToken(token) {
       try{
        console.log("hello")
        const response = await axios.post("/api/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Payment Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
       }catch(err){
         console.log("ERRORRR", err)
       }

    }
    return (
        <StripeCheckout
            stripeKey = "pk_test_51Hu1bnCcafUqJjBLp94S62WTLFBAfR21RGQ9d2KTnetmd3pGtKjXxBKl7Iumdth0e4v515um5iR9tsrncIUMUaUD00ZtN9I6r2"
            token={handleToken}
            amount={product.price * 100}
            name={product.name}
            billingAddress
            shippingAddress
        />
    )
}
export default Checkout;