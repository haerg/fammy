import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import './Reset.css';
import './App.css';
import WelcomeScreen from './components/welcomeScreen/welcomeScreen';
import HowDoesItWorks from './components/howDoesItWorks/howDoesItWorks';
import FammyTop from './components/fammyTop/fammyTop';
import MainFooter from './components/MainFooter/MainFooter';

library.add(faCoffee);

class App extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef()
    }

 render() {
  return (
      <div>
       <WelcomeScreen refProp={this.ref}/>
       <HowDoesItWorks/>
       <FammyTop refProp={this.ref}/>
       {/*<Condition/>*/}
       <MainFooter/>
      </div>
  );
 }
}

export default App;
