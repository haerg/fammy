import React, { Component } from 'react';
import './MainFooter.css';
import {
    withRouter,
} from 'react-router-dom';
import logo from "../header/logo/fammy.png";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import facebook from "./facebook-logo.svg";
import inst from "./instagram.svg";
import medium from "./medium-size.svg"

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
    btnIcon: {
        marginTop: 0,
    },
    normalLabel: {
        textTransform: 'none',
    },
});

class MainFooter extends Component {

    blogAction = (event) => {
        window.open("https://medium.com/fammy-fm");
    };

    instAction = (event) => {
        window.open("https://www.instagram.com/fammy.fm/");
    };

    fbAction = (event) => {
        window.open("https://www.facebook.com/fammy.fm");
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="footer-background-view">
                <div className="footer-official-container">
                    <Typography component="p" variant="subtitle1">
                        © 2019 Fammy, Inc.
                    </Typography>
                    <Button variant="text"
                            className={classes.button}
                            onClick={this.logInAction}>
                        Terms of Use
                    </Button>
                    <Button variant="text"
                            className={classes.button}
                            onClick={this.logInAction}>
                        Privacy Policy
                    </Button>
                    <Button variant="text"
                            className={classes.button}
                            onClick={this.blogAction}>
                        Blog
                    </Button>
                </div>
                <div className="footer-social-container">
                    <Typography component="p" variant="subtitle1">
                        Follow us
                    </Typography>
                    <Button variant="text"  classes={{
                        root: classes.btnIcon,
                        label: classes.normalLabel,
                    }} onClick={this.instAction}>
                        <img className="footer-social_image" src={inst} alt=""/>
                    </Button>
                    <Button variant="text"  classes={{
                        root: classes.btnIcon,
                        label: classes.normalLabel,
                    }} onClick={this.fbAction}>
                        <img className="footer-social_image" src={facebook} alt=""/>
                    </Button>
                    <Button variant="text"  classes={{
                        root: classes.btnIcon,
                        label: classes.normalLabel,
                    }} onClick={this.blogAction}>
                        <img className="footer-social_image" src={medium} alt=""/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(MainFooter));
