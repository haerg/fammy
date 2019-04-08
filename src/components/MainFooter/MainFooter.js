import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './MainFooter.css';
import facebook from './facebook-logo.svg';
import inst from './instagram.svg';
import medium from './medium-size.svg';

class MainFooter extends Component {

 blogAction = () => {
  window.open('https://medium.com/fammy-fm', '_blank');
 };

 render() {
  return (
      <footer>
       <div className="footer__menu">
        <div className="footer__official-container">
         <Button variant="text"
                 onClick={this.logInAction}>
          Terms of Use
         </Button>
         <Button variant="text"
                 onClick={this.logInAction}>
          Privacy Policy
         </Button>
         <Button variant="text"
                 onClick={this.blogAction}>
          Blog
         </Button>
        </div>
        <div className="footer-social__container">
         <Typography component="p" variant="subtitle1">
          Follow us
         </Typography>
         <a className="footer__social__image" href="https://www.instagram.com/fammy.fm"
            rel="noopener noreferrer"
            target="_blank">
          <img src={inst} alt=""/>
         </a>
         <a className="footer__social__image" href="https://www.facebook.com/fammy.fm"
            rel="noopener noreferrer"
            target="_blank">
          <img src={facebook} alt=""/>
         </a>
         <a className="footer__social__image" href="https://medium.com/fammy-fm"
            rel="noopener noreferrer"
            target="_blank">
          <img src={medium} alt=""/>
         </a>
        </div>
       </div>

       <div className="footer__typography-container">
        <Typography component="p" variant="subtitle1">
         © 2019 Fammy, Inc.
        </Typography>
       </div>

      </footer>
  );
 }
}

export default withRouter(MainFooter);
