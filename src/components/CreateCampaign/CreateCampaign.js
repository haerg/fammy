import React, { Component } from 'react';
import './CreateCampaign.css';
import Header from "../welcomeScreen/welcomeScreen";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import Logo from "../header/header";
import logo from "../header/logo/fammy.png";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 20,
        marginRight: 20,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class CreateCampaign extends React.Component {

    logInAction = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        // this.props.history.push(`/logIn`);
    };

    logoClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push('/');
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
            <div className="create-campaign-top-container">
                <div className="create-campaign-signup">
                    <div id="mainLogo">
                        <img src={logo} alt="Fammy" onClick={this.logoClick}/>
                    </div>
                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            {/*<Typography component="h6" variant="h6">*/}
                                {/*Song title*/}
                            {/*</Typography>*/}
                            <Typography component="p" variant="h6">
                                Artist name
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Artist name"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Song name
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Song name"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>


                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Spotify URL to the audio
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Spotify URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Add a videos that describes your project
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project
                                You can add more than one video, just use ',' between links
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="YouTube URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Campaign duration
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Set a time limit for your campaign. You won’t be able to change this after you launch
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="YouTube URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Funding goal
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Set an achievable goal that covers what you need to complete your project.
                                Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="YouTube URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>


                    <div className="create-campaign-btn-container">
                        <Button color="primary" className={classes.button} onClick={this.logInAction}>
                            By creating Campaign you agree with Terms
                        </Button>
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Create Campaign
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CreateCampaign);
