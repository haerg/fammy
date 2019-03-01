import React, { Component } from 'react';

import './Reset.css';
import './App.css';
import WelcomeScreen from './components/welcomeScreen/welcomeScreen';
import HowDoesItWorks from './components/howDoesItWorks/howDoesItWorks';
import FammyTop from './components/fammyTop/fammyTop';

class App extends Component {
 render() {
  return (
      <div>
       <WelcomeScreen/>
       <HowDoesItWorks/>
       <FammyTop/>
      </div>
  );
 }
}

export default App;
