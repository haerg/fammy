import React, { Component } from 'react';
import './logo.css';
import logo from './fammy.png';

class Logo extends Component {

 render = () => {
  return (
      <div id="logo">
       <img src={logo} alt="Fammy"/>
       <span>Fammy</span>
      </div>
  );
 };
}

export default Logo;
