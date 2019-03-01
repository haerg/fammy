import React, { Component } from 'react';
import './welcomeScreen.css';
import { withStyles } from '@material-ui/core/styles';
import logo from './fammy.png';
import Button from '@material-ui/core/Button';

const styles = {
 root: {
  backgroundColor: '#66BB6A',
  color: 'white',
  '&:hover': {
   backgroundColor: '#30b334',
  },
 },
 label: {
  textTransform: 'capitalize',
 },
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
         <span>Fammy</span>
        </div>
        {/*<Button variant="contained"*/}
                {/*classes={{*/}
                 {/*root: classes.root,*/}
                 {/*label: classes.label,*/}
                {/*}}>*/}
         {/*Sign In*/}
        {/*</Button>*/}
       </div>

       <div className="welcome-screen__details">
        <div className="welcome-screen__details__title">
            Fammy makes it easy for musicians to find resources for a music video.
        </div>
        <div className="welcome-screen__details__sub-title"> Backers get % from a video revenue on YouTube based on their contribution.</div>
        <div>
            <div className="welcome-screen__wrapper_getstarted_button">
                <Button className="welcome-screen__getstarted_button"
                    variant="contained"
                    classes={{
                    root: classes.root,
                    label: classes.label,
                }}>Get started
            </Button>
            </div>
        </div>
       </div>

      </div>
  );
 }
}

export default withStyles(styles)(WelcomeScreen);
