import React, { Component } from 'react';
import singer from './singer.svg';
import dollar from './dollar.svg';
import goal from './goal.svg';
import './howDoesItWorks.css';

class HowDoesItWorks extends Component {

 constructor(props) {
  super(props)
  this.ref = React.createRef()
 }

 render() {
  return (
      <div className="how-does-it-works">
       <div className="how-does-it-works__title">How it works?</div>
       <div className="how-does-it-works__features">

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={singer} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Creator sets project's funding goal and deadline
         </div>
         <div className="how-does-it-works__feature__sub-title">
          You can give money to make it happen
         </div>
        </div>

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={goal} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Once the project has reached its funding goal - all backers are charged
         </div>
         <div className="how-does-it-works__feature__sub-title">
          If the project fails on its goal, no one
          is charged
         </div>
        </div>

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={dollar} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Backers get part of the video revenue, based on their contribution
         </div>
         <div className="how-does-it-works__feature__sub-title">
          Win - win for backers and for
          musicians
         </div>
        </div>

       </div>
      </div>
  );
 }
}

export default HowDoesItWorks;
