import React, { Component } from 'react';
import './Checkout.css';
import logo from "../header/logo/fammy.png";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import {StripeProvider} from 'react-stripe-elements';
import TrackInfo from "../trackInfo/trackInfo";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Checkout extends Component {


    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    logoClick = (event) => {
        this.props.history.push('/');
    };

    async submit(ev) {
        // User clicked submit
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="checkout-top-container">
                <div className="checkout">
                    <div id="mainLogo">
                        <img src={logo} alt="Fammy" onClick={this.logoClick}/>
                    </div>

                    <StripeProvider apiKey="pk_test_LYcLwvvwZN0enblLl0Zjqfhv00jIJv1DJE">
                        <CardForm/>
                    </StripeProvider>
                    {/*<TextField*/}
                        {/*id="outlined-name"*/}
                        {/*label="Email address"*/}
                        {/*// onChange={this.handleChange('name')}*/}
                        {/*margin="normal"*/}
                        {/*variant="outlined"*/}
                    {/*/>*/}
                    {/*<TextField*/}
                        {/*id="outlined-name"*/}
                        {/*label="Password"*/}
                        {/*// onChange={this.handleChange('name')}*/}
                        {/*margin="normal"*/}
                        {/*variant="outlined"*/}
                    {/*/>*/}

                    <div className="checkout-btn-container">
                        <Button variant="contained" color="primary"  >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// export default injectStripe(Checkout);
export default Checkout;

class CardForm extends React.Component {
    render() {
        return (
            <div className="checkout-form">
                <Elements>
                    <CardNumber/>
                </Elements>
                <Elements>
                    <CardExpiry/>
                </Elements>
                <Elements>
                    <CardCVC/>
                </Elements>
            </div>
        );
    }
}

class _CardNumber extends React.Component {
    render() {
        return (
            <Elements>
                <label>
                    Card number
                    <CardNumberElement
                        {...createOptions('18px')}
                    />
                </label>
            </Elements>
        );
    }
}
const CardNumber = injectStripe(_CardNumber);

class _CardExpiry extends React.Component {
    render() {
        return (
            <Elements>
                <label>
                    Expiration date
                <CardExpiryElement
                    {...createOptions('18px')}
                />
                </label>
            </Elements>
        );
    }
}
const CardExpiry = injectStripe(_CardExpiry);

class _CardCVC extends React.Component {
    render() {
        return (
            <Elements>
                <label>
                    CVC
                    <CardCVCElement
                        {...createOptions('18px')}
                    />
                </label>
            </Elements>
        );
    }
}
const CardCVC = injectStripe(_CardCVC);

const createOptions = (fontSize: string, padding: ?string) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
                ...(padding ? {padding} : {}),
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};
