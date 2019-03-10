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
    roundedRed: {
        backgroundColor: '#DB5643',
        borderRadius: 30,
        height: 50,
        color: 'white',
        '&:hover': {
            backgroundColor: '#DB5643',
        },
    },
    roundedWhite: {
        backgroundColor: '#FAEFED',
        borderRadius: 30,
        height: 50,
        color: '#DB5643',
        '&:hover': {
            backgroundColor: '#FAEFED',
        },
    },
    clear: {
        backgroundColor: 'transparent',
        color: 'white',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    normalLabel: {
        textTransform: 'none',
    },
    redLabel: {
        textTransform: 'none',
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
           <div className="welcome-screen__right-container">
               <Button variant="text"
                       classes={{
                           root: classes.clear,
                           label: classes.label,
                       }}>
                   Sign up
               </Button>
               <Button variant="text"
                       classes={{
                           root: classes.clear,
                           label: classes.label,
                       }}>
                   Log in
               </Button>
            </div>
       </div>

       <div className="welcome-screen__details">
        <div className="welcome-screen__details__title">
            Fammy helps musicians find resources for a music video
        </div>
        <div className="welcome-screen__details__sub-title">Backers get part of the video revenue based on their contribution
        </div>
           <div className="welcome-screen__wrapper_getstarted_button">

               <div className="welcome-screen__wrapper_start_compain">
               <Button variant="contained"
                       classes={{
                           root: classes.roundedWhite,
                           label: classes.redLabel,
                       }}>
                   Explore compains
               </Button>
               </div>

               <div className="welcome-screen__wrapper_start_compain">

               <Button variant="contained"
                       classes={{
                           root: classes.roundedRed,
                           label: classes.normalLabel,
                       }} >
                   Start my compain
               </Button>
               </div>

           </div>
       </div>

      </div>
  );
 }
}

export default withStyles(styles)(WelcomeScreen);
