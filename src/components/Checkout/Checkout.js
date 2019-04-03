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
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {

    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
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

                    <TextField
                        id="outlined-adornment-amount"
                        className={classes.textField}
                        variant="outlined"
                        label="Amount"
                        margin="normal"
                        value={1}
                        // onChange={this.handleChange('amount')}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />

                    <TextField
                        id="outlined-name"
                        className={classes.textField}
                        variant="outlined"
                        label="Email address"
                        margin="normal"
                        // onChange={this.handleChange('name')}
                    />

                    <div className="checkout-btn-container">
                        <Button color="primary" className={classes.button} onClick={this.actionSignUp}>
                            We're using Stripe for payments
                        </Button>
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// export default injectStripe(Checkout);
export default withStyles(styles)(Checkout);

class CardForm extends React.Component {
    render() {
        return (
            <div className="checkout-form">
                <Elements>
                    <CardNumber/>
                </Elements>
                {/*<Elements>*/}
                    {/*<CardExpiry/>*/}
                {/*</Elements>*/}
                {/*<Elements>*/}
                    {/*<CardCVC/>*/}
                {/*</Elements>*/}
            </div>
        );
    }
}

class _CardNumber extends React.Component {
    render() {
        return (
          <CardElement {...createOptions('18px')} className="card-element" />
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
                hidePostalCode: true,
                color: '#424770',
                letterSpacing: '0.025em',
                ...(padding ? {padding} : {}),
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};
