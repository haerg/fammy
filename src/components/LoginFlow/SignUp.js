import React, { Component } from 'react';
import './SignUp.css';
import Header from "../welcomeScreen/welcomeScreen";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";

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

class SignUp extends React.Component {

    logInAction = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/logIn`);
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "Name",
            email: "Email address",
            password: "Password"
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.email + " " + this.state.password + " ");
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="signup-top-container">
                <div className="login">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Email address"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Password"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />

                    <div className="btn-container">
                        <Button color="primary" className={classes.button} onClick={this.logInAction}>
                            Have an account?
                        </Button>
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Create Account
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SignUp);
