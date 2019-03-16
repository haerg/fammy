import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import './Reset.css';
import './App.css';
import WelcomeScreen from './components/welcomeScreen/welcomeScreen';
import HowDoesItWorks from './components/howDoesItWorks/howDoesItWorks';
import FammyTop from './components/fammyTop/fammyTop';
import MainFooter from './components/MainFooter/MainFooter';
import Condition from './components/Condition/Condition';

library.add(faCoffee);

class App extends Component {
 render() {
  return (
      <div>
       <WelcomeScreen/>
       <HowDoesItWorks/>
       <FammyTop/>
       {/*<Condition/>*/}
       <MainFooter/>
      </div>
  );
 }
}

export default App;
