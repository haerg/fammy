import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import TrackInfo from './components/trackInfo/trackInfo';
import LogIn from './components/LoginFlow/LogIn';
import SignUp from './components/LoginFlow/SignUp';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <BrowserRouter>
     <Router>
      <Switch>
          <Route path="/logIn" component={LogIn}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/tracks/:id" component={TrackInfo}/>
          <Route path="/" component={App}/>
      </Switch>
     </Router>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
