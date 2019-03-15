import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './header.css';
import Logo from '../header/logo/logo';
import { withStyles } from '@material-ui/core';
import { func, object } from 'prop-types';
import {
    withRouter,
} from 'react-router-dom';

const styles = theme => ({
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
 },
 normalLabel: {
  textTransform: 'none',
 },
});


class Header extends Component {

    logInAction = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/logIn`);
    };

    signUpAction = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/signUp`);
    };

    render = () => {
  const { classes } = this.props;

  return (
      <header className="header">
       <Logo/>

       <div className="header__buttons">
        <Button variant="text"
                classes={{
                 // root: classes.root,
                 // label: classes.label,
                }} onClick={this.signUpAction}>
         Sign up
        </Button>
        <Button variant="text"
                classes={{
                 // root: classes.root,
                 // label: classes.label,
                }} onClick={this.logInAction}>
         Log in
        </Button>
       </div>

      </header>
  );

 };
}

// withRouter(Header);
// withStyles(styles)(Header);

export default withRouter(Header);
