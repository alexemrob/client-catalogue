import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeCheckout from 'react-stripe-checkout';

function Charge() {

    function handleToken(token, addresses)
    {
        console.log({ token, addresses })
    }
    return (
<div>HELLO MONEY$$$
    <StripeCheckout 
    stripeKey="pk_test_51Hu1bnCcafUqJjBLp94S62WTLFBAfR21RGQ9d2KTnetmd3pGtKjXxBKl7Iumdth0e4v515um5iR9tsrncIUMUaUD00ZtN9I6r2"
    token={handleToken}
    amount={100 * 100}
    />
</div>
    )
}
export default Charge;