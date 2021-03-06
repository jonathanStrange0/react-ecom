import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

 

const StripeCheckoutButton = ({price}) => {
    // total price must be in cents here.
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_FLfrmTk5isC5CTD5u82IrFzc00cqOhVNFy'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
        
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton