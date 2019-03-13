import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './header.css';
import Logo from '../header/logo/logo';
import { withStyles } from '@material-ui/core';

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

 render = () => {
  const { classes } = this.props;

  return (
      <header className="header">
       <Logo/>

       <div className="header__buttons">
        <Button variant="text"
                classes={{
                 root: classes.root,
                 label: classes.label,
                }}>
         Sign up
        </Button>
        <Button variant="text"
                classes={{
                 root: classes.root,
                 label: classes.label,
                }}>
         Log in
        </Button>
       </div>

      </header>
  );

 };
}

export default withStyles(styles)(Header);
