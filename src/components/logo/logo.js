import React, { Component } from 'react';
import './logo.css';
import logo from './fammy.png';
import { withRouter } from 'react-router-dom';

class Logo extends Component {

 logoClick = (event) => {
  event.preventDefault();
  event.stopPropagation();
  this.props.history.push('/');
 };

 render = () => {
  return (
      <div id="logo">
       <img src={logo} alt="Fammy" onClick={this.logoClick}/>
      </div>
  );
 };
}

export default withRouter(Logo);

