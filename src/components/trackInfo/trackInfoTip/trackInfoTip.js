import React, { Component } from 'react';
import './trackInfoTip.css';
import youtube from './youtube.svg';

class TrackInfoTip extends Component {
 render = () => {

  return (
      <div className="track-info-container__tips">

       <div className="track-info-container__tabs__title_without_broder">How music videos earn
        money?
       </div>

       <div className="track-info-container__information">
        <div className="track-info-container__information__icon">
         <img className="track-info-container__information__icon-original" src={youtube} alt=""/>
        </div>
        <div className="track-info-container__information__title">
         YouTube Pay Rate Per View
        </div>
        <div className="track-info-container__information__sub-title">
         On average, you can earn $.80 according to 1,000 perspectives monetized by banner
         advertisements,
         or, $five-$8 consistent with 1,000 views on a video monetized by means of rollout
         commercials (the advertisements before the video).
         So, on a video with 1,000,000 views monetized by rollout ads, you can earn 5,000-8,000.
        </div>
       </div>

      </div>
  );

 };
}

export default TrackInfoTip;
