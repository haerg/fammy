import React, { Component } from 'react';
import './Checkout.css';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, injectStripe, StripeProvider, Elements} from 'react-stripe-elements';
import App from "../../App";

const styles = {
    container: {
        padding: 100,
        color: '#111',
        maxWidth: 640
    },
    containerText: {
        fontSize: 40,
        lineHeight: 1.4
    },
    payNow: {
        backgroundColor: '#aaa',
        color: '#fff',
        padding: '16px 24px',
        fontSize: 20,
        border: 0,
        borderRadius: 4,
        fontWeight: 700,
        cursor: 'pointer'
    },
    paymentPerson: {
        color: '#FF4136'
    },
    paymentAmount: {
        color: '#2ECC40'
    },
    paymentDescription: {
        color: '#0074D9'
    }
};

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        // User clicked submit
    }

    render() {
        return (
                <StripeCheckout
                    // token={this.onToken}
                    stripeKey="pk_test_LYcLwvvwZN0enblLl0Zjqfhv00jIJv1DJE"
                    // amount="100"
                    name={`Back song`}
                >
                    <div className="checkout-details__back-song-btn">Back this song</div>
                    {/*<button style={styles.payNow}>Back this song</button>*/}
                </StripeCheckout>
        );
    }
}

// export default injectStripe(Checkout);
export default Checkout;
