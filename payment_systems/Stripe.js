import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

// ^^ does the above mean i should move this code into a different file? 
const stripePromise = loadStripe('pk_live_51Kbwr6FTKm73vtmDwwC4RdXYF7thnbfNyDjklcsKdOcYsaPWT6qnL1bv4cNxNQpVAeitwjb1so8GxCjX5HdebXdv00X0yQu6EB');

let PRICE_ID = 'prod_LIcbkhbZkanUnV'; //my code, unsure if right 
const Stripe = () => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: '{{prod_LIcbkhbZkanUnV}}' // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    , // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'payment',
          successUrl: 'https://example.com/success',
          cancelUrl: 'https://example.com/cancel',
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };
    return ( 
      <button role="link" onClick={handleClick}>
        Checkout 
      </button> 

     );
}
 
export default Stripe;