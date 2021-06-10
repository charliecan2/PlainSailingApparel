import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
    const pricedForStripe = price * 100;
    const publishableKey = 'pk_test_51J0rDcKpREOw6XO9bM8p7ooKXZqbmp84A4BuVDGgy5Up6O7vtzUpUtbUP00dmNLO9faZahaPIRGEJuiucsS5h9Ri00VzPwACdk'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Plain Sailing Apprel, Inc.'
        billingAddress
        shippingAddress
        image={`${process.env.PUBLIC_URL}/sailboat-silhouette.png`}
        description={`Your total is ${price}`}
        amount={pricedForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton