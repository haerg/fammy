import React, { Component } from 'react';
import './MainFooter.css';
import {
    withRouter,
} from 'react-router-dom';
import logo from "../header/logo/fammy.png";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";

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

class MainFooter extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="footer-background-view">
                <Typography component="p" variant="subtitle1">
                    © 2019 Fammy, Inc.
                </Typography>
                <Button color="primary"
                        className={classes.button}
                        onClick={this.logInAction}>
                    Terms of Use
                </Button>
                <Button color="primary"
                        className={classes.button}
                        onClick={this.logInAction}>
                    Privacy Policy
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(MainFooter));