import React, { Component } from 'react';
import singer from './singer.svg';
import singerHovered from './singerHovered.svg';
import dollar from './dollar.svg';
import dollarHovered from './dollarHovered.svg';
import goal from './goal.svg';
import goalHovered from './goalHovered.svg';
import './howDoesItWorks.css';

class HowDoesItWorks extends Component {
 render() {
  return (
      <div className="how-does-it-works">
       <div className="how-does-it-works__title">How it works?</div>
       <div className="how-does-it-works__features">

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={singer} alt=""/>
          <img className="how-does-it-works__feature__icon-hovered" src={singerHovered} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Creator sets project's funding goal and deadline
         </div>
         <div className="how-does-it-works__feature__sub-title">
          If you like the music, you can give money to make it happen.
         </div>
        </div>

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={goal} alt=""/>
          <img className="how-does-it-works__feature__icon-hovered" src={goalHovered} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Once the project has reached its funding goal - all backers are charged
         </div>
         <div className="how-does-it-works__feature__sub-title">
          If the project fails on its funding goal, no one
          is charged.
         </div>
        </div>

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={dollar} alt=""/>
          <img className="how-does-it-works__feature__icon-hovered" src={dollarHovered} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Backers get % from the video revenue, based on their contribution
         </div>
         <div className="how-does-it-works__feature__sub-title">
          In case music is actually good - its a win win for backers and for
          musicians.
         </div>
        </div>

       </div>
      </div>
  );
 }
}

export default HowDoesItWorks;
