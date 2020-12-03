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
    stripeKey="pk_live_51Hu1bnCcafUqJjBLdNcJIFy9yHmzl4SV1VQ8Eup0XlDg1uo99QqLli7o517pKAoAW3q95pvS3zv9EGTSB7DtvNvY0038S1ZSJG"
    token={handleToken}
    />
</div>
    )
}
export default Charge;