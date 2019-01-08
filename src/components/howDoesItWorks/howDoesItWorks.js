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
       <div className="how-does-it-works__title">How does it works?</div>
       <div className="how-does-it-works__features">

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={singer} alt=""/>
          <img className="how-does-it-works__feature__icon-hovered" src={singerHovered} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Every project creator sets their project's funding goal and deadline
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
          If the project succeeds in reaching its funding goal, all backers'credit cards are charged
          when time expires
         </div>
         <div className="how-does-it-works__feature__sub-title">
          Funding on Fammy is all-or-nothing. If the project fails short of its funding goal, no one
          is charged.
         </div>
        </div>

        <div className="how-does-it-works__feature">
         <div className="how-does-it-works__feature__icon">
          <img className="how-does-it-works__feature__icon-original" src={dollar} alt=""/>
          <img className="how-does-it-works__feature__icon-hovered" src={dollarHovered} alt=""/>
         </div>
         <div className="how-does-it-works__feature__title">
          Backers actually get % from video revenue from YouTube based on their contribution
         </div>
         <div className="how-does-it-works__feature__sub-title">
          In case video became viral and music is actually good - its a win win for backers and for
          musicians.
         </div>
        </div>

       </div>
      </div>
  );
 }
}

export default HowDoesItWorks;
