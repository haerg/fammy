import React, { Component } from 'react';
import './welcomeScreen.css';
import { withStyles } from '@material-ui/core/styles';
import logo from './fammy.png';
import Button from '@material-ui/core/Button';

const styles = {
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
 },
 label: {
  textTransform: 'capitalize',
 },
    rounded: {
        backgroundColor: 'transparent',
        color: 'white',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
};

class WelcomeScreen extends Component {
 render() {
  const { classes } = this.props;
  return (
      <div className="welcome-screen">
       <div className="welcome-screen__overlay"/>

       <div className="welcome-screen__logo-container">
        <div id="logo">
         <img src={logo} alt="Fammy"/>
        </div>
        <Button variant="contained"
                classes={{
                 root: classes.rounded,
                 label: classes.label,
                }}>
         Sign up
        </Button>
           <Button variant="contained"
                   classes={{
                       root: classes.rounded,
                       label: classes.label,
                   }}>
               Log in
           </Button>
       </div>

       <div className="welcome-screen__details">
        <div className="welcome-screen__details__title">
            Fammy helps musicians find resources for a music video.
        </div>
        <div className="welcome-screen__details__sub-title">Backers get part of a revenue from the video based on their contribution.
        </div>
           <div className="welcome-screen__wrapper_getstarted_button">
               <Button variant="contained"
                       classes={{
                           root: classes.root,
                           label: classes.label,
                       }}>
                   Start my compain
               </Button>
           </div>
       </div>

      </div>
  );
 }
}

export default withStyles(styles)(WelcomeScreen);
